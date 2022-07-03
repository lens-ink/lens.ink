import { LensApp, Profile } from "../types";
import DOMPurify from "isomorphic-dompurify";

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
        "yoginth.lens.ink",
        "yixin91069033.lens.ink",
        "juliettech.lens.ink",
      ]
    : [
        "lensprotocol.localhost:3000",
        "bradorbradley.localhost:3000",
        "m1guelpf.localhost:3000",
        "yoginth.localhost:3000",
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

export function linkifyBio(bio?: string) {
  if (!bio) return "";
  const replacer = (handler: string) => {
    return `<a href="https://${handler}.ink" target="_blank" class="font-bold  text-lensDark">${handler}</a>`;
  };
  const description = bio.replaceAll(
    "@lensprotocol",
    `<a href="https://lensprotocol.lens.ink" target="_blank" class="font-bold text-lensDark">@lensprotocol</a>`
  );
  const regexp = /@[A-Za-z0-9]+(.lens)+/;
  return DOMPurify.sanitize(description.replace(regexp, replacer), {
    USE_PROFILES: { html: true },
  });
}

export function getAvatar(profile: Profile) {
  return (
    profile.picture?.original?.url ??
    profile?.picture?.uri ??
    `https://avatar.tobi.sh/${profile.ownedBy}Id_${profile.handle}.png`
  );
}
