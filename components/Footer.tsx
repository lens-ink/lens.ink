import SvgIcon from "./icons/SvgIcon";
import ThemeChanger from "./ThemeChanger";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-1 md:bottom-0 py-2 text-lensDark w-full text-center">
        <a href="https://github.com/stonega" target="_blank" rel="noreferrer">
          Made by stonegate
        </a>
        <a
          href="https://github.com/lens-ink/lens.ink"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon
            name="GitHub"
            className="w-4 h-4 inline ml-2 fill-lensDark"
          />
        </a>
        <a
          className="ml-2"
          href="https://vercel.com/?utm_source=stonega&amp;utm_campaign=oss"
          target="_blank"
          rel="noreferrer noopener"
        >
          powered by Vercel ▲
        </a>
      </div>
      <div className="absolute right-2 top-2">
        <ThemeChanger></ThemeChanger>
      </div>
    </>
  );
};

export default Footer;
