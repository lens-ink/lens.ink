import MetaMask from "../../assets/metamask.svg";
import WalletConnect from "../../assets/walletconnect.svg";
import Twitter from "../../assets/twitter.svg";
import Website from "../../assets/website.svg";
import LensFrens from "../../assets/lensfrens.svg";
import Lenster from "../../assets/lenster.svg";
import Iris from "../../assets/iris.svg";
import TwitterFill from '../../assets/twitter-fill.svg'
import GitHub from '../../assets/github.svg'

const SvgIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "MetaMask":
      return <MetaMask className={className} />;
    case "GitHub":
      return <GitHub className={className} />;
    case "WalletConnect":
      return <WalletConnect className={className} />;
    case "TwitterFill":
      return <TwitterFill className={className} />;
    case "Twitter":
      return <Twitter className={className} />;
    case "Website":
      return <Website className={className} />;
    case "LensFrens":
      return <LensFrens className={className} />;
    case "Lenster":
      return <Lenster className={className} />;
    case "iris":
      return <Iris className={className} />;
    default:
      return null;
  }
};

export default SvgIcon;
