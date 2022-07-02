import { LensApp } from "../types";

export const lensApps: LensApp[] = [
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
