import Search from "@components/common/search";
import { useUI } from "@contexts/ui.context";
import Image from "next/image";
import { Waypoint } from "react-waypoint";
import cn from "classnames";
import { useTranslation } from "next-i18next";

const Banner = ({ banner, className }) => {
  const { t } = useTranslation("banner");
  const { showHeaderSearch, hideHeaderSearch } = useUI();
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === "above") {
      showHeaderSearch();
    }
  };
  return (
    <div className={cn("hidden lg:block relative", className)}>
      <div className="min-h-140 overflow-hidden -z-1">
        <Image
          alt={banner?.heading}
          src={"/banner/mockexam.jpg"}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="p-5 mt-[8rem] absolute inset-0 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl xl:text-5xl tracking-tight text-heading font-bold mb-5 xl:mb-8">
          {t(banner?.heading)}
        </h1>
        <p className="text-base xl:text-lg text-heading mb-10 xl:mb-14">
          {t(banner?.subheading)}
        </p>
        <div className="max-w-3xl w-full">
          <Search label="search" />
        </div>
        <Waypoint
          onLeave={showHeaderSearch}
          onEnter={hideHeaderSearch}
          onPositionChange={onWaypointPositionChange}
        />
      </div>
    </div>
  );
};

export default Banner;
