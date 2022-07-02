import { LensApp } from "../types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export interface AppLinkProps {
  handle: string;
  lensApp: LensApp;
}
const AppLink = ({ handle, lensApp }: AppLinkProps) => {
  const lMd = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <div className="px-8 md:px-16 mt-4 flex flex-row items-center">
        <Image
          className="min-w-[40px]"
          src={lensApp.logo}
          alt={lensApp.name}
          width={lMd ? 40 : 20}
          height={lMd ? 40 : 20}
        ></Image>
        <a
          className="ml-2 md:ml-4 no-underline break-words text-lg hover:underline"
          style={{ color: lensApp.color }}
          href={lensApp.url?.(handle) ?? "https://" + lensApp.link(handle)}
          rel="noreferrer"
        >
          {lensApp.link(handle)}
        </a>
      </div>
    </>
  );
};

export default AppLink;
