import createLogger from "Utils/logger"
import RelayQueryResponseCache from "relay-runtime/lib/network/RelayQueryResponseCache"
import { isServer } from "Server/isServer"
import { cache } from "Server/cacheClient"

import {
  GraphQLResponse,
  QueryResponseCache,
  CacheConfig as RelayCacheConfig,
  Variables as RelayVariables,
} from "relay-runtime"
import { getENV } from "Utils/getENV"

const logger = createLogger("System/Relay/middleware/cache/Cache")

export interface CacheConfig {
  size: number
  ttl: number // in milliseconds
  enableGraphqlProxy?: boolean
}

export class Cache {
  cacheConfig: CacheConfig
  enableGraphqlProxy: boolean
  relayCache: RelayQueryResponseCache

  constructor(cacheConfig: CacheConfig) {
    this.cacheConfig = cacheConfig

    this.enableGraphqlProxy =
      getENV("ENABLE_GRAPHQL_PROXY") === "true" &&
      isServer &&
      !!this.cacheConfig.enableGraphqlProxy

    this.initRelayCache()
  }

  initRelayCache() {
    this.relayCache = new QueryResponseCache(this.cacheConfig)
  }

  getCacheKey(queryId: string, variables: RelayVariables) {
    const cacheKey = JSON.stringify({ queryId, variables })
    return cacheKey
  }

  async get(queryId: string, variables: RelayVariables) {
    let cachedRes = this.relayCache.get(queryId, variables)

    if (cachedRes) return cachedRes

    // No cache in relay store, check redis
    if (this.enableGraphqlProxy) {
      const cacheKey = this.getCacheKey(queryId, variables)

      try {
        const rawCachedRes = await cache.get(cacheKey)

        if (rawCachedRes) {
          cachedRes = JSON.parse(rawCachedRes)
          logger.log("\n[RedisGraphqlCache#get] Success", cacheKey)
        }
      } catch (error) {
        logger.error("[RedisGraphqlCache#get] Error", cacheKey, error)
      }
    }

    return cachedRes
  }

  async set(
    queryId: string,
    variables: RelayVariables,
    res: GraphQLResponse,
    options: { cacheConfig: RelayCacheConfig }
  ) {
    this.relayCache.set(queryId, variables, res)

    // Store in redis during server-side pass
    if (this.enableGraphqlProxy && !options?.cacheConfig?.force) {
      const cacheKey = this.getCacheKey(queryId, variables)

      try {
        /**
         * Set a value with an expiry in MS.
         * @see https://redis.io/commands/set
         * @see https://github.com/NodeRedis/node-redis/issues/1000#issuecomment-193155582
         */
        await cache.set(
          cacheKey,
          JSON.stringify(res),
          "PX",
          this.cacheConfig.ttl
        )
        logger.log("\n[RedisGraphqlCache#set] Success", cacheKey)
      } catch (error) {
        logger.error("[RedisGraphqlCache#set] Error", cacheKey, error)
      }
    }
  }

  async clear() {
    this.relayCache.clear()
  }
}
