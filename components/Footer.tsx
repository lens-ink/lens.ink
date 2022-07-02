const Footer = () => {
  return (
    <div className="absolute bottom-0 md:bottom-0 py-2 text-lensDark w-full text-center">
      <a href="https://github.com/stonega" target="_blank" rel="noreferrer">
        Made by stonegate ❤️
      </a>
      <a
        className="ml-2"
        href="https://vercel.com/?utm_source=stonega&amp;utm_campaign=oss"
        target="_blank"
        rel="noreferrer noopener"
      >
        Powered by Vercel ▲
      </a>
    </div>
  );
};

export default Footer;
