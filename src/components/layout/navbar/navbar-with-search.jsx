import { useRef } from "react";
import Link from "@components/ui/link";
import cn from "classnames";
import { useUI } from "@contexts/ui.context";
import { siteSettings } from "@settings/site.settings";
import Logo from "@components/ui/logo";
// import Search from "@components/common/search";
import JoinButton from "@components/layout/navbar/join-button";
import ProductTypeMenu from "@components/layout/navbar/product-type-menu";
import dynamic from "next/dynamic";
// import { ROUTES } from "@utils/routes";
// import { useTypesQuery } from "@data/type/use-types.query";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Search from "../../common/search";

const AuthorizedMenu = dynamic(
  () => import("@components/layout/navbar/authorized-menu"),
  { ssr: false }
);

const NavbarWithSearch = () => {
  const { t } = useTranslation("common");
  const { asPath, query } = useRouter();
  console.log("asPath", query);
  // const { data } = useTypesQuery();
  // const types = "main";
  // const slugs = types?.map((item) => item.slug);

  const isMaintest = asPath.includes("maintest");
  // const hasType = slugs?.includes(currentPath);
  const hasType = true;

  const navbarRef = useRef();
  const { isAuthorize, displayHeaderSearch, displayMobileSearch } = useUI();
  return (
    <header
      ref={navbarRef}
      className="site-header-with-search h-14 md:h-16 lg:h-auto"
    >
      <nav
        className={cn(
          "w-full h-14 md:h-16 lg:h-22 py-5 px-4 lg:px-8 flex justify-between items-center  top-0 end-0 z-20 transition-transform duration-300 ",
          {
            "fixed lg:absolute bg-light lg:bg-transparent":
              !displayHeaderSearch && hasType,
            "is-sticky fixed shadow-sm bg-light":
              displayHeaderSearch || !hasType,
          }
        )}
      >
        {displayMobileSearch ? (
          <div className="w-full">
            <Search label={t("text-search-label")} variant="minimal" />
            {/* <div>Search NavbarWithSearch</div> */}
          </div>
        ) : (
          <>
            {/* <div>Logo</div> */}
            <Logo whiteFont={isMaintest} className="mx-auto lg:mx-0" />
            {/* <ProductTypeMenu className="ms-10 me-auto hidden xl:block" /> */}
            <Link href={siteSettings.logo.href}>
              {" "}
              <div className="lg:hidden text-base font-semibold cursor-pointer">
                Exam List
              </div>
            </Link>

            <div className="hidden lg:block w-full">
              <div
                className={cn(
                  "w-full xl:w-11/12 2xl:w-10/12 mx-auto px-10 overflow-hidden",
                  {
                    hidden: !displayHeaderSearch && hasType,
                    flex: displayHeaderSearch || !hasType,
                  }
                )}
              >
                <Search label={t("text-search-label")} variant="minimal" />
                {/* <div>Search</div> */}
              </div>
            </div>
            <ul className="hidden lg:flex items-center flex-shrink-0 gap-[20px]">
              {siteSettings.headerLinks.map(({ href, label, icon }) => (
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
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavbarWithSearch;
