import { useRef } from "react";
import Link from "@components/ui/link";
import cn from "classnames";
import { useUI } from "@contexts/ui.context";
import { siteSettings } from "@settings/site.settings";
import JoinButton from "@components/layout/navbar/join-button";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// import { getIcon } from "@utils/get-icon";
import { Waypoint } from "react-waypoint";
import { useTypesQuery } from "@data/type/use-types.query";

const AuthorizedMenu = dynamic(
  () => import("@components/layout/navbar/authorized-menu"),
  { ssr: false }
);

const NavbarWithTypes = () => {
  const { t } = useTranslation("common");

  const { showHeaderSearch, hideHeaderSearch } = useUI();

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === "above") {
      showHeaderSearch();
    }
  };

  const router = useRouter();
  const { data } = useTypesQuery();

  function handleClick(path) {
    close();
    router.push(path);
  }

  const selectedMenu = data?.types?.find((type) =>
    router.asPath.includes(type.slug)
  );

  const slugs = data?.types?.map((item) => item.slug);
  const currentPath = router.asPath
    .substring(
      0,
      router.asPath.indexOf("?") === -1
        ? router.asPath.length
        : router.asPath.indexOf("?")
    )
    .replace(/\//g, "");

  const hasType = slugs?.includes(currentPath);

  const navbarRef = useRef();
  const { isAuthorize, displayHeaderSearch } = useUI();

  return (
    <>
      <Waypoint
        onLeave={showHeaderSearch}
        onEnter={hideHeaderSearch}
        onPositionChange={onWaypointPositionChange}
      />
      <header
        ref={navbarRef}
        className={cn(
          "site-header-with-search w-full top-0 end-0 z-20 border-b border-gray-200 transition-shadow duration-300 bg-light",
          {
            "fixed lg:absolute": !displayHeaderSearch,
            "is-sticky fixed bg-light shadow-md": displayHeaderSearch,
          }
        )}
      >
        <nav
          className={cn(
            "w-full h-14 md:h-16 lg:h-22 py-5 px-4 lg:px-8 flex justify-between items-center border-b border-gray-100 "
          )}
        >
          <Logo className="mx-auto lg:mx-0" />
          {/* <div> Logo</div> */}
          {/* <ul className="hidden lg:flex items-center flex-shrink-0 space-s-10">
            {siteSettings.headerLinks?.map(({ href, icon, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className="font-semibold text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
                >
                  {icon && <span className="me-2">{icon}</span>}
                  {t(label)}
                </Link>
              </li>
            ))}
            {isAuthorize ? (
              <li>
                <AuthorizedMenu />
              </li>
            ) : (
              <li>
                <JoinButton />
              </li>
            )}
          </ul> */}
        </nav>

        <div className="flex items-center mx-auto w-full max-w-6xl space-x-6 h-20 md:h-24 px-5 overflow-x-auto">
          {data?.types?.map(({ id, name, slug, icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(`/${slug}`)}
              className={cn(
                "flex items-center flex-shrink-0 bg-gray-100 text-sm font-semibold px-6 h-12 rounded-3xl border border-gray-200 text-heading focus:outline-none",
                {
                  "!border-gray-900": selectedMenu,
                }
              )}
            >
              {icon && (
                <span className="flex w-5 h-5 items-center justify-center">
                  icon
                  {/* {getIcon({
                    iconList: typeIcon,
                    iconName: icon,
                    className: "max-h-full max-w-full",
                  })} */}
                </span>
              )}
              <span className="ms-2">{name}</span>
            </button>
          ))}
        </div>
      </header>
    </>
  );
};

export default NavbarWithTypes;
