import { LensApp } from "../types";
import SvgIcon from "./icons/SvgIcon";

export interface AppLinkProps {
  handle: string;
  lensApp: LensApp;
}
const AppLink = ({ handle, lensApp }: AppLinkProps) => {
  return (
    <>
      <div className="px-8 md:px-16 mt-4 flex flex-row items-center">
        <div className="hidden md:block">
          <SvgIcon name={lensApp.name} className="h-10 w-10" />
        </div>
        <div className="ml-0 md:ml-4 ">
          <div className="font-semi-bold flex flex-row">
            <div className="block md:hidden">
              <SvgIcon name={lensApp.name} className="h-6 w-6" />
            </div>
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
