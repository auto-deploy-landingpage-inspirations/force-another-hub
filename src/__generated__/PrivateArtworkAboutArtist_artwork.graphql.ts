/**
 * @generated SignedSource<<ddce84db9a42f42a3a778c45e7ae3dee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateArtworkAboutArtist_artwork$data = {
  readonly artist: {
    readonly biographyBlurb: {
      readonly text: string | null | undefined;
    } | null | undefined;
    readonly counts: {
      readonly artworks: any | null | undefined;
      readonly follows: any | null | undefined;
      readonly forSaleArtworks: any | null | undefined;
    } | null | undefined;
    readonly coverArtwork: {
      readonly image: {
        readonly cropped: {
          readonly src: string;
          readonly srcSet: string;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly formattedNationalityAndBirthday: string | null | undefined;
    readonly href: string | null | undefined;
    readonly initials: string | null | undefined;
    readonly internalID: string;
    readonly name: string | null | undefined;
    readonly partnerBiographyBlurb: {
      readonly text: string | null | undefined;
    } | null | undefined;
    readonly slug: string;
    readonly " $fragmentSpreads": FragmentRefs<"FollowArtistButton_artist">;
  } | null | undefined;
  readonly displayArtistBio: boolean | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "PrivateArtworkAboutArtist_artwork";
};
export type PrivateArtworkAboutArtist_artwork$key = {
  readonly " $data"?: PrivateArtworkAboutArtist_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrivateArtworkAboutArtist_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "kind": "Literal",
  "name": "format",
  "value": "HTML"
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrivateArtworkAboutArtist_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayArtistBio",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FollowArtistButton_artist"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "initials",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "formattedNationalityAndBirthday",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "artworks",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "forSaleArtworks",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "follows",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "coverArtwork",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "height",
                      "value": 145
                    },
                    {
                      "kind": "Literal",
                      "name": "width",
                      "value": 145
                    }
                  ],
                  "concreteType": "CroppedImageUrl",
                  "kind": "LinkedField",
                  "name": "cropped",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "src",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "srcSet",
                      "storageKey": null
                    }
                  ],
                  "storageKey": "cropped(height:145,width:145)"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            (v1/*: any*/)
          ],
          "concreteType": "partnerBiographyBlurb",
          "kind": "LinkedField",
          "name": "partnerBiographyBlurb",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": "partnerBiographyBlurb(format:\"HTML\")"
        },
        {
          "alias": null,
          "args": [
            (v1/*: any*/),
            {
              "kind": "Literal",
              "name": "partnerBio",
              "value": false
            }
          ],
          "concreteType": "ArtistBlurb",
          "kind": "LinkedField",
          "name": "biographyBlurb",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": "biographyBlurb(format:\"HTML\",partnerBio:false)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "ea4344a85ed19f878b86956f78a47038";

export default node;
