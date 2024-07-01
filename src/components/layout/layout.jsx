import Navbar from "@components/layout/navbar/navbar";
import MobileNavigation from "./mobile-navigation";
import { Suspense } from "react";
import PageLoader from "../ui/page-loader";
// import PageLoader from "@ui/page-loader";
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col transition-colors duration-150 bg-gray-100">
    <Navbar />
    <Suspense fallback={<PageLoader />}>
      <div className="flex-grow">{children}</div>
    </Suspense>
    <MobileNavigation search={false} />
  </div>
);

export default Layout;
