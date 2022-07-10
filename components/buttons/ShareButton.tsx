import { Profile } from "types";
import queryString from "query-string";
import Button from "./Buttons";
import SvgIcon from "components/icons/SvgIcon";

const ShareButton = ({ profile }: { profile: Profile }) => {
  const share = () => {
    let handle = profile.handle;
    if (handle === "lensprotocol") handle += ".lens";
    const shareUrl =
      "https://twitter.com/share?" +
      queryString.stringify({
        url: `https://${handle}.ink`,
        text: profile.name,
        via: "lens.ink",
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
