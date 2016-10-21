module.exports = """
  fragment artists on Artwork {
    artists {
      bio
      name
      href
      biography_blurb(format: HTML) {
        text
        credit
      }
      exhibition_highlights(size: 20) {
        kind
        name
        start_at
        href
        partner {
          ... on ExternalPartner {
            name
          }
          ... on Partner {
            name
          }
        }
        city
      }
      articles {
        thumbnail_image {
          cropped(width: 100, height: 100) {
            url
          }
        }
        href
        title
        author {
          name
        }
      }
      artists(size: 16) {
        ... artistCell
      }
    }
  }
  #{require '../../../../components/artist_cell/query.coffee'}
"""
