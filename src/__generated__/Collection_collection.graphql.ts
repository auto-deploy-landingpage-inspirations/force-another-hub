/**
 * @generated SignedSource<<b475a9127d86183b46a61cbaec370a61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtworkAggregation = "ARTIST" | "ARTIST_NATIONALITY" | "ARTIST_SERIES" | "ATTRIBUTION_CLASS" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "LOCATION_CITY" | "MAJOR_PERIOD" | "MATERIALS_TERMS" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "SIMPLE_PRICE_HISTOGRAM" | "TOTAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type Collection_collection$data = {
  readonly artworksConnection: {
    readonly aggregations: ReadonlyArray<{
      readonly counts: ReadonlyArray<{
        readonly count: number;
        readonly name: string;
        readonly value: string;
      } | null | undefined> | null | undefined;
      readonly slice: ArtworkAggregation | null | undefined;
    } | null | undefined> | null | undefined;
    readonly counts?: {
      readonly followedArtists: any | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Header_artworks" | "SeoProductsForArtworks_artworks">;
  } | null | undefined;
  readonly ascending_artworks: {
    readonly " $fragmentSpreads": FragmentRefs<"SeoProductsForCollections_ascending_artworks">;
  } | null | undefined;
  readonly descending_artworks: {
    readonly " $fragmentSpreads": FragmentRefs<"SeoProductsForCollections_descending_artworks">;
  } | null | undefined;
  readonly description: string | null | undefined;
  readonly descriptionMarkdown: string | null | undefined;
  readonly fallbackHeaderImage: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly image: {
          readonly url: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly headerImage: string | null | undefined;
  readonly id: string;
  readonly linkedCollections: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"CollectionsHubRails_linkedCollections">;
  }>;
  readonly relatedCollections: ReadonlyArray<{
    readonly internalID: string;
  }>;
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtworksFilter_collection" | "Header_collection">;
  readonly " $fragmentType": "Collection_collection";
};
export type Collection_collection$key = {
  readonly " $data"?: Collection_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"Collection_collection">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v1 = {
  "kind": "Literal",
  "name": "includeMediumFilterInAggregation",
  "value": true
},
v2 = {
  "kind": "Literal",
  "name": "sort",
  "value": "-decayed_merch"
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "aggregations"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "input"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "shouldFetchCounts"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Collection_collection",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Header_collection"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "descriptionMarkdown",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "headerImage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 1
        }
      ],
      "concreteType": "MarketingCollection",
      "kind": "LinkedField",
      "name": "relatedCollections",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": "relatedCollections(size:1)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarketingCollectionGroup",
      "kind": "LinkedField",
      "name": "linkedCollections",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CollectionsHubRails_linkedCollections"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "fallbackHeaderImage",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FilterArtworksEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
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
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:1,includeMediumFilterInAggregation:true,sort:\"-decayed_merch\")"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "aggregations",
          "variableName": "aggregations"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        },
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Header_artworks"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SeoProductsForArtworks_artworks"
        },
        {
          "condition": "shouldFetchCounts",
          "kind": "Condition",
          "passingValue": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FilterArtworksCounts",
              "kind": "LinkedField",
              "name": "counts",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "followedArtists",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ]
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworksAggregationResults",
          "kind": "LinkedField",
          "name": "aggregations",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slice",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AggregationCount",
              "kind": "LinkedField",
              "name": "counts",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "value",
                  "storageKey": null
                },
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
                  "name": "count",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "descending_artworks",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "sort",
          "value": "sold,-has_price,-prices"
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SeoProductsForCollections_descending_artworks"
        }
      ],
      "storageKey": "artworksConnection(first:1,includeMediumFilterInAggregation:true,sort:\"sold,-has_price,-prices\")"
    },
    {
      "alias": "ascending_artworks",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "sort",
          "value": "sold,-has_price,prices"
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SeoProductsForCollections_ascending_artworks"
        }
      ],
      "storageKey": "artworksConnection(first:1,includeMediumFilterInAggregation:true,sort:\"sold,-has_price,prices\")"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CollectionArtworksFilter_collection"
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};
})();

(node as any).hash = "d6c0a00e3bfdc4f0925b6bfe40ec5341";

export default node;
