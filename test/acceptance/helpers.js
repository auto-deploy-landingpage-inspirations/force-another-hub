import express from 'express'
import Nightmare from 'nightmare'
import moment from 'moment'
import cheerio from 'cheerio'
import url from 'url'

const {
  ACCEPTANCE_TIMEOUT,
  API_URL,
  APP_URL,
  METAPHYSICS_ENDPOINT,
  POSITRON_URL
} = process.env
const [
  FORCE_PORT,
  GRAVITY_PORT,
  METAPHYSICS_PORT,
  POSITRON_PORT
] = [
  APP_URL,
  API_URL,
  METAPHYSICS_ENDPOINT,
  POSITRON_URL
].map((u) => url.parse(u).port)
const TIMEOUT = Number(ACCEPTANCE_TIMEOUT)
const servers = []
let force, gravity, metaphysics, positron

// Setup function for end to end tests. It starts express apps that mock the
// downstream services Force uses such as Gravity and Metaphysics. It's then
// up to the test to add routing behavior to those apps.
//
// e.g. gravity.get('/api/v1/artwork/:id', () => ...)
//
export const setup = async () => {
  gravity = await startGravity(GRAVITY_PORT)
  positron = await startApp(POSITRON_PORT)
  metaphysics = await startApp(METAPHYSICS_PORT)
  force = await startForce(FORCE_PORT)
  const browser = Nightmare({
    waitTimeout: TIMEOUT,
    gotoTimeout: TIMEOUT,
    loadTimeout: TIMEOUT,
    executionTimeout: TIMEOUT
  })
  browser.page = (path) =>
    browser
      .goto(`${APP_URL}${path}`)
      .evaluate(() => document.documentElement.innerHTML)
      .then(cheerio.load)
      .catch((err) => console.error(err) && Promise.reject(err))
  return { force, gravity, metaphysics, positron, browser }
}

// Closes all of the mocked API servers
export const teardown = () => {
  try {
    servers.forEach((server) => server.close())
  } catch (e) {
    console.warn(e)
  }
}

const startForce = (port) =>
  new Promise((resolve, reject) => {
    const app = require('../../')
    servers.push(app.listen(port, (err) => {
      if (err) reject(err)
      else resolve(app)
    }))
  })

const startGravity = (port) =>
  new Promise((resolve, reject) => {
    const app = express()
    app.get('/api/v1/xapp_token', (req, res) => {
      res.send({
        xapp_token: 'xapp-token',
        expires_in: moment().add(100, 'days').utc().format()
      })
    })
    servers.push(app.listen(port, (err) => {
      if (err) reject(err)
      else resolve(app)
    }))
  })

const startApp = (port) =>
  new Promise((resolve, reject) => {
    const app = express()
    servers.push(app.listen(port, (err) => {
      if (err) reject(err)
      else resolve(app)
    }))
  })
