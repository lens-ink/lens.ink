import { Profile } from "../types";
import DOMPurify from "isomorphic-dompurify";

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
  const description = bio.replace(
    "@lensprotocol",
    `<a href="https://lensprotocol.lens.ink" target="_blank" class="font-bold text-lensDark">@lensprotocol</a>`
  );
  const regexp = /@[A-Za-z0-9]+(.lens)+/;
  return DOMPurify.sanitize(description.replace(regexp, replacer), {
    USE_PROFILES: { html: true },
  });
}

export function getAvatar(profile?: Profile, address?: string) {
  if (!profile) return `https://avatar.tobi.sh/${address}.png`;
  return (
    profile.picture?.original?.url ??
    profile.picture?.uri ??
    `https://avatar.tobi.sh/${profile.ownedBy}Id_${profile.handle}.png`
  );
}
