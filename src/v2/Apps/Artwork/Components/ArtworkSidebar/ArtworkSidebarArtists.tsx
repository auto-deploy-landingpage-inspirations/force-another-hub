import { Box, Serif } from "@artsy/palette"
import { SystemContextConsumer } from "v2/Artsy"

import { FollowIcon } from "v2/Components/FollowIcon"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

import { ContextModule, OwnerType } from "@artsy/cohesion"
import { ArtworkSidebarArtists_artwork } from "v2/__generated__/ArtworkSidebarArtists_artwork.graphql"
import { FollowArtistButtonFragmentContainer as FollowArtistButton } from "v2/Components/FollowButton/FollowArtistButton"
import { RouterLink } from "v2/Artsy/Router/RouterLink"

export interface ArtistsProps {
  artwork: ArtworkSidebarArtists_artwork
}

type Artist = ArtworkSidebarArtists_artwork["artists"][0]

export class ArtworkSidebarArtists extends React.Component<ArtistsProps> {
  private renderArtistName(artist: Artist) {
    return artist.href ? (
      <Serif size="5t" display="inline" weight="semibold" element="h1">
        <RouterLink to={artist.href}>{artist.name}</RouterLink>
      </Serif>
    ) : (
      <Serif size="5t" display="inline" weight="semibold" element="h1">
        {artist.name}
      </Serif>
    )
  }

  private renderSingleArtist = (
    artist: Artist,
    user,
    artwork: ArtworkSidebarArtists_artwork
  ) => {
    return (
      <React.Fragment>
        <Box>{this.renderArtistName(artist)}</Box>
        <FollowArtistButton
          artist={artist}
          user={user}
          trackingData={{
            contextModule: ContextModule.artworkSidebar,
            contextOwnerId: artwork.internalID,
            contextOwnerSlug: artwork.slug,
            contextOwnerType: OwnerType.artwork,
            ownerId: artist.internalID,
            ownerSlug: artist.slug,
          }}
          triggerSuggestions
          render={({ is_followed }) => {
            return <FollowIcon isFollowed={is_followed} />
          }}
        >
          Follow
        </FollowArtistButton>
      </React.Fragment>
    )
  }

  renderMultipleArtists() {
    const {
      artwork: { artists },
    } = this.props
    return artists.map((artist, index) => {
      return (
        <React.Fragment key={artist.id}>
          {this.renderArtistName(artist)}
          {index !== artists.length - 1 && ", "}
        </React.Fragment>
      )
    })
  }

  renderCulturalMaker(cultural_maker: string) {
    return (
      <Serif size="5t" display="inline-block" weight="semibold">
        {cultural_maker}
      </Serif>
    )
  }
  render() {
    const {
      artwork: { artists, cultural_maker },
    } = this.props
    return (
      <SystemContextConsumer>
        {({ user, mediator }) => {
          return (
            <Box>
              {artists.length === 1
                ? this.renderSingleArtist(artists[0], user, this.props.artwork)
                : this.renderMultipleArtists()}
              {artists.length === 0 &&
                cultural_maker &&
                this.renderCulturalMaker(cultural_maker)}
            </Box>
          )
        }}
      </SystemContextConsumer>
    )
  }
}

export const ArtworkSidebarArtistsFragmentContainer = createFragmentContainer(
  ArtworkSidebarArtists,
  {
    artwork: graphql`
      fragment ArtworkSidebarArtists_artwork on Artwork
        @argumentDefinitions(
          showFollowSuggestions: { type: "Boolean", defaultValue: true }
        ) {
        internalID
        slug
        cultural_maker: culturalMaker
        artists {
          id
          internalID
          slug
          name
          href
          ...FollowArtistButton_artist
            @arguments(showFollowSuggestions: $showFollowSuggestions)
        }
      }
    `,
  }
)
