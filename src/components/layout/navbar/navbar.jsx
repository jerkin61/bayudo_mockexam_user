import { useRef } from "react";
import { siteSettings } from "@settings/site.settings";
import Logo from "@components/ui/logo";
import NavLink from "@components/ui/link/nav-link";
import JoinButton from "@components/layout/navbar/join-button";
import { addActiveScroll } from "@utils/add-active-scroll";
import { useUI } from "@contexts/ui.context";
import dynamic from "next/dynamic";
// import { ROUTES } from "@utils/routes";
// import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

const AuthorizedMenu = dynamic(
  () => import("@components/layout/navbar/authorized-menu"),
  { ssr: false }
);

const Navbar = () => {
  const navbarRef = useRef();
  const { isAuthorize } = useUI();
  const { t } = useTranslation("common");
  addActiveScroll(navbarRef);

  return (
    <header ref={navbarRef} className="site-header h-14 md:h-16 lg:h-22">
      <nav className="h-14 md:h-16 lg:h-22 fixed w-full z-20 bg-light shadow-sm py-5 px-4 lg:px-5 xl:px-8 flex justify-between items-center">
        <Logo className="mx-auto lg:mx-0" />
        {/* <div>logo</div> */}
        <ul className="hidden lg:flex items-center gap-5">
          {/* {isAuthorize ? <li key="track-orders">authorized</li> : null} */}
          {siteSettings.headerLinks?.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <NavLink activeClassName="text-accent" href={href}>
                <span className="no-underline font-semibold flex items-center transition-colors duration-200 hover:text-accent focus:text-accent">
                  {icon && <span className="me-2">{icon}</span>}
                  {t(label)}
                </span>
              </NavLink>
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
      </nav>
    </header>
  );
};

export default Navbar;
