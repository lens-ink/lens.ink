import { LensApp } from "../types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";

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
        {lMd && (
          <Image
            src={lensApp.logo}
            alt={lensApp.name}
            width={40}
            height={40}
          ></Image>
        )}
        <div className="ml-0 md:ml-4 ">
          <div className="font-semi-bold flex flex-row">
            {lMd || (
              <Image
                className="visible md:invisible"
                src={lensApp.logo}
                alt={lensApp.name}
                width={20}
                height={20}
              ></Image>
            )}
            <span className="ml-2 md:ml-0">{lensApp.name}</span>
          </div>
          <a
            className="no-underline break-words text-lg hover:underline"
            style={{ color: lensApp.color }}
            href={lensApp.url?.(handle) ?? "https://" + lensApp.link(handle)}
            rel="noreferrer"
          >
            {lensApp.link(handle)}
          </a>
        </div>
      </div>
    </>
  );
};

export default AppLink;
