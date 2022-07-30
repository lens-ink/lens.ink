import { LensApp } from "../types";
import fileFollowNFT from "./abis/lens-follow-nft-contract-abi.json";
import fileLensHub from "./abis/lens-hub-contract-abi.json";

export const isProduction = process.env.NODE_ENV === "production";

export const LENS_FOLLOW_NFT_ABI = fileFollowNFT;

export const LENS_HUB_ABI = fileLensHub;

export const LENS_HUB_CONTRACT_ADDRESS = isProduction
  ? "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"
  : "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82";

export const LENS_API = isProduction
  ? "https://api.lens.dev/"
  : "https://api-mumbai.lens.dev/";

export const APP_URL = isProduction
  ? "https://lens.ink/"
  : "http://localhost:3000/";

export const LENS_ENDING = isProduction ? ".lens" : ".test";

export const lensApps: LensApp[] = [
  {
    name: "Twitter",
    logo: "../assets/twitter.svg",
    color: "#1D9BF0",
    link: (handle: string) => "@" + handle,
    url: (handle: string) => "https://twitter.com/" + handle,
  },
  {
    name: "Website",
    logo: "../assets/website.svg",
    color: "#000000",
    link: (handle: string) => handle.replace("https://", ""),
    url: (handle: string) => handle,
  },
  {
    name: "LensFrens",
    logo: "../assets/lensfrens.svg",
    color: "#00501e",
    link: (handle: string) => "lensfrens.xyz/" + handle,
  },
  {
    name: "Lenster",
    logo: "../assets/lenster.svg",
    color: "#8b5cf6",
    link: (handle: string) => "lenster.xyz/u/" + handle,
  },
  {
    name: "iris",
    logo: "../assets/iris.svg",
    color: "#ed7276",
    link: (handle: string) => "irisapp.xyz/user/" + handle,
  },
];

export const exampleLinks = isProduction
  ? [
      "lensprotocol.lens.ink",
      "bradorbradley.lens.ink",
      "m1guelpf.lens.ink",
      "yoginth.lens.ink",
      "yixin91069033.lens.ink",
      "juliettech.lens.ink",
    ]
  : [
      "lensprotocol.localhost:3000",
      "moonxjet.localhost:3000",
      "label.localhost:3000",
      "stonegate.localhost:3000",
      "bynea.localhost:3000",
      "zelta.localhost:3000",
    ];
