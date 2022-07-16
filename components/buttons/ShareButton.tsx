import { Profile } from "types";
import queryString from "query-string";
import Button from "./Buttons";

const ShareButton = ({ profile }: { profile: Profile }) => {
  const share = () => {
    let handle = profile.handle;
    const twitter = profile.attributes.find((a) => a.key === "twitter")?.value;
    if (handle === "lensprotocol") handle += ".lens";
    const shareUrl =
      "https://twitter.com/share?" +
      queryString.stringify({
        url: `https://${handle}.ink`,
        text: `${profile.name ?? ''}  ${twitter ? "@" : ""}${twitter}`,
        via: "_lensink",
      });
    return window.open(shareUrl, "Share to Twitter");
  };

  return (
    <>
      <Button onClick={() => share()}>Tweet</Button>
    </>
  );
};

export default ShareButton;
