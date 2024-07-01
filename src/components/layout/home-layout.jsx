import NavbarWithSearch from "@components/layout/navbar/navbar-with-search";
import MobileNavigation from "./mobile-navigation";
import PageLoader from "../ui/page-loader";
import { Suspense } from "react";

const HomeLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen h-full transition-colors duration-150">
    <NavbarWithSearch />
    <Suspense fallback={<PageLoader />}>{children}</Suspense>
    <MobileNavigation />
  </div>
);

export default HomeLayout;
