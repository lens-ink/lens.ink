import { LensApp } from "../types";

export const lensApps: LensApp[] = [
  {
    name: "Twitter",
    logo: require("../assets/twitter.svg"),
    color: "#1D9BF0",
    link: (handle: string) => "@" + handle,
    url: (handle: string) => "https://twitter.com/" + handle,
  },
  {
    name: "Website",
    logo: require("../assets/website.svg"),
    color: "#000000",
    link: (handle: string) => handle.replaceAll("https://", ""),
    url: (handle: string) => handle,
  },
  {
    name: "LensFrens",
    logo: require("../assets/lensfrens.svg"),
    color: "#00501e",
    link: (handle: string) => "lensfrens.xyz/" + handle,
  },
  {
    name: "Lenster",
    logo: require("../assets/lenster.svg"),
    color: "#8b5cf6",
    link: (handle: string) => "lenster.xyz/u/" + handle,
  },
  {
    name: "iris",
    logo: require("../assets/iris.svg"),
    color: "#ed7276",
    link: (handle: string) => "irisapp.xyz/user/" + handle,
  },
];

export const exampleLinks =
  process.env.NODE_ENV === "production"
    ? [
        "lensprotocol.lens.ink",
        "bradorbradley.lens.ink",
        "m1guelpf.lens.ink",
        "yixin91069033.lens.ink",
        "juliettech.lens.ink",
      ]
    : [
        "lensprotocol.localhost:3000",
        "bradorbradley.localhost:3000",
        "m1guelpf.localhost:3000",
        "yixin91069033.localhost:3000",
        "juliettech.localhost:3000",
      ];

export function parseId(id: string) {
  return "#" + parseInt(id, 16).toFixed();
}

export function shortAddress(address?: string) {
  if (address == null) return "";
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
}

export function polygonUrl(address: string) {
  return `https://polygonscan.com/address/${address}`;
}

export function openseaUrl(id: string) {
  return `https://opensea.io/assets/matic/0xdb46d1dc155634fbc732f92e853b10b288ad5a1d/${parseInt(
    id,
    16
  )}`;
}
