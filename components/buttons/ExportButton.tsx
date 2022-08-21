import { Profile } from "types";
import Button from "./Buttons";
import { isProduction } from "utils";
import { useTheme } from "next-themes";

const ExportButton = ({ profile }: { profile: Profile }) => {
  const { resolvedTheme: theme } = useTheme();
  const getProfile = () => {
    let handle = profile.handle;
    const url = isProduction
      ? "https://lens.ink/api/export/"
      : "http://localhost:3000/api/export/";
    return (
      url + handle.replace(isProduction ? ".lens" : ".test", "") + `/${theme}`
    );
  };

  return (
    <>
      <Button
        onClick={() => {
          document.getElementById("link")?.click();
        }}
      >
        <a>Export</a>
      </Button>
      <a
        id="link"
        target="_blank"
        href={getProfile()}
        download={`${profile.handle}.png`}
        hidden
        rel="noreferrer"
      ></a>
    </>
  );
};

export default ExportButton;
