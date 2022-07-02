import { LensApp } from "../types";
import Image from "next/image";

export interface AppLinkProps {
  handle: string;
  lensApp: LensApp;
}
const AppLink = ({ handle, lensApp }: AppLinkProps) => {
  return (
    <>
      <div className="px-16 mt-4 flex flex-row items-center">
        <Image
          src={lensApp.logo}
          alt={lensApp.name}
          width={40}
          height={40}
        ></Image>
        <a
          className={`ml-4 no-underline text-lg text-[${lensApp.color}] hover:underline`}
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
