/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowsCityQueryVariables = {
    slug: string;
    after?: string | null;
    page?: number | null;
};
export type ShowsCityQueryResponse = {
    readonly city: {
        readonly " $fragmentRefs": FragmentRefs<"ShowsCity_city">;
    } | null;
};
export type ShowsCityQuery = {
    readonly response: ShowsCityQueryResponse;
    readonly variables: ShowsCityQueryVariables;
};



/*
query ShowsCityQuery(
  $slug: String!
  $after: String
  $page: Int
) {
  city(slug: $slug) {
    ...ShowsCity_city_3Wi2mG
  }
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}

fragment ShowsCity_city_3Wi2mG on City {
  name
  slug
  upcomingShows: showsConnection(first: 18, status: UPCOMING, sort: START_AT_ASC) {
    edges {
      node {
        internalID
        startAt
        ...ShowsFeaturedShow_show
        id
      }
    }
  }
  currentShows: showsConnection(first: 18, status: RUNNING, after: $after, page: $page, sort: END_AT_ASC) {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    totalCount
    edges {
      node {
        internalID
        ...ShowsFeaturedShow_show
        id
      }
    }
  }
  pastShows: showsConnection(first: 18, status: CLOSED) {
    edges {
      node {
        internalID
        ...ShowsFeaturedShow_show
        id
      }
    }
  }
}

fragment ShowsFeaturedShow_show on Show {
  ...ShowsShowDates_show
  id
  name
  href
  coverImage {
    title
    large: cropped(width: 910, height: 683) {
      width
      height
      src
      srcSet
    }
    small: cropped(width: 600, height: 450) {
      width
      height
      src
      srcSet
    }
  }
  partner {
    __typename
    ... on Partner {
      name
    }
    ... on ExternalPartner {
      name
      id
    }
    ... on Node {
      id
    }
  }
}

fragment ShowsShowDates_show on Show {
  startAt
  endAt
  formattedStartAt: startAt(format: "MMM D")
  formattedEndAt: endAt(format: "MMM D")
  location {
    city
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v3 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 18
},
v6 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "width",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "height",
    "storageKey": null
  },
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
v9 = [
  (v4/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ShowEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Show",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
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
          "name": "startAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": null
        },
        {
          "alias": "formattedStartAt",
          "args": (v6/*: any*/),
          "kind": "ScalarField",
          "name": "startAt",
          "storageKey": "startAt(format:\"MMM D\")"
        },
        {
          "alias": "formattedEndAt",
          "args": (v6/*: any*/),
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": "endAt(format:\"MMM D\")"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "city",
              "storageKey": null
            },
            (v7/*: any*/)
          ],
          "storageKey": null
        },
        (v7/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "coverImage",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": "large",
              "args": [
                {
                  "kind": "Literal",
                  "name": "height",
                  "value": 683
                },
                {
                  "kind": "Literal",
                  "name": "width",
                  "value": 910
                }
              ],
              "concreteType": "CroppedImageUrl",
              "kind": "LinkedField",
              "name": "cropped",
              "plural": false,
              "selections": (v8/*: any*/),
              "storageKey": "cropped(height:683,width:910)"
            },
            {
              "alias": "small",
              "args": [
                {
                  "kind": "Literal",
                  "name": "height",
                  "value": 450
                },
                {
                  "kind": "Literal",
                  "name": "width",
                  "value": 600
                }
              ],
              "concreteType": "CroppedImageUrl",
              "kind": "LinkedField",
              "name": "cropped",
              "plural": false,
              "selections": (v8/*: any*/),
              "storageKey": "cropped(height:450,width:600)"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "partner",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
            (v7/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v9/*: any*/),
              "type": "Partner"
            },
            {
              "kind": "InlineFragment",
              "selections": (v9/*: any*/),
              "type": "ExternalPartner"
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
v11 = [
  (v10/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
},
v14 = [
  (v12/*: any*/),
  (v13/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isCurrent",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowsCityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "city",
        "plural": false,
        "selections": [
          {
            "args": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "ShowsCity_city"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShowsCityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "city",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": "upcomingShows",
            "args": [
              (v5/*: any*/),
              {
                "kind": "Literal",
                "name": "sort",
                "value": "START_AT_ASC"
              },
              {
                "kind": "Literal",
                "name": "status",
                "value": "UPCOMING"
              }
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": "showsConnection(first:18,sort:\"START_AT_ASC\",status:\"UPCOMING\")"
          },
          {
            "alias": "currentShows",
            "args": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v3/*: any*/),
              {
                "kind": "Literal",
                "name": "sort",
                "value": "END_AT_ASC"
              },
              {
                "kind": "Literal",
                "name": "status",
                "value": "RUNNING"
              }
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursors",
                "kind": "LinkedField",
                "name": "pageCursors",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "around",
                    "plural": true,
                    "selections": (v14/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "first",
                    "plural": false,
                    "selections": (v14/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "last",
                    "plural": false,
                    "selections": (v14/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "previous",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "pastShows",
            "args": [
              (v5/*: any*/),
              {
                "kind": "Literal",
                "name": "status",
                "value": "CLOSED"
              }
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": "showsConnection(first:18,status:\"CLOSED\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShowsCityQuery",
    "operationKind": "query",
    "text": "query ShowsCityQuery(\n  $slug: String!\n  $after: String\n  $page: Int\n) {\n  city(slug: $slug) {\n    ...ShowsCity_city_3Wi2mG\n  }\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n\nfragment ShowsCity_city_3Wi2mG on City {\n  name\n  slug\n  upcomingShows: showsConnection(first: 18, status: UPCOMING, sort: START_AT_ASC) {\n    edges {\n      node {\n        internalID\n        startAt\n        ...ShowsFeaturedShow_show\n        id\n      }\n    }\n  }\n  currentShows: showsConnection(first: 18, status: RUNNING, after: $after, page: $page, sort: END_AT_ASC) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    totalCount\n    edges {\n      node {\n        internalID\n        ...ShowsFeaturedShow_show\n        id\n      }\n    }\n  }\n  pastShows: showsConnection(first: 18, status: CLOSED) {\n    edges {\n      node {\n        internalID\n        ...ShowsFeaturedShow_show\n        id\n      }\n    }\n  }\n}\n\nfragment ShowsFeaturedShow_show on Show {\n  ...ShowsShowDates_show\n  id\n  name\n  href\n  coverImage {\n    title\n    large: cropped(width: 910, height: 683) {\n      width\n      height\n      src\n      srcSet\n    }\n    small: cropped(width: 600, height: 450) {\n      width\n      height\n      src\n      srcSet\n    }\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment ShowsShowDates_show on Show {\n  startAt\n  endAt\n  formattedStartAt: startAt(format: \"MMM D\")\n  formattedEndAt: endAt(format: \"MMM D\")\n  location {\n    city\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '616794a1025604d59d5337b86e43a29a';
export default node;
