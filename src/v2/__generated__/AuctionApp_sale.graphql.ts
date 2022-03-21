/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuctionApp_sale = {
    readonly internalID: string;
    readonly coverImage: {
        readonly url: string | null;
    } | null;
    readonly showAssociatedSale: {
        readonly internalID: string;
    } | null;
    readonly showBuyNowTab: {
        readonly internalID: string;
    } | null;
    readonly cascadingEndTime: {
        readonly intervalLabel: string | null;
    } | null;
    readonly cascadingEndTimeInterval: number | null;
    readonly " $fragmentRefs": FragmentRefs<"AuctionMeta_sale" | "AuctionAssociatedSale_sale" | "AuctionBuyNowRail_sale" | "AuctionDetails_sale">;
    readonly " $refType": "AuctionApp_sale";
};
export type AuctionApp_sale$data = AuctionApp_sale;
export type AuctionApp_sale$key = {
    readonly " $data"?: AuctionApp_sale$data;
    readonly " $fragmentRefs": FragmentRefs<"AuctionApp_sale">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionApp_sale",
  "selections": [
    (v0/*: any*/),
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
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": [
                "wide",
                "source",
                "large_rectangle"
              ]
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:[\"wide\",\"source\",\"large_rectangle\"])"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "showAssociatedSale",
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "associatedSale",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": "showBuyNowTab",
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "promotedSale",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleCascadingEndTime",
      "kind": "LinkedField",
      "name": "cascadingEndTime",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "intervalLabel",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cascadingEndTimeInterval",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuctionMeta_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuctionAssociatedSale_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuctionBuyNowRail_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuctionDetails_sale"
    }
  ],
  "type": "Sale",
  "abstractKey": null
};
})();
(node as any).hash = 'a3e3dba05a708385e858e24a2e4c0803';
export default node;
