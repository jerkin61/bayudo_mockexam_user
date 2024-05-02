import HomeLayout from "@components/layout/home-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
// import Banner from "@components/common/banner";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller, Element } from "react-scroll";
// import Homepage from "../../components/";
const Homepage = dynamic(() => import("@components/home"));

export default function Dashboard({}) {
  const { query } = useRouter();
  useEffect(() => {
    if (query.text || query.category) {
      scroller.scrollTo("grid", {
        smooth: true,
        offset: -110,
      });
    }
  }, [query.text, query.category]);
  return (
    <>
      <Element name="grid">
        {/* <BakeryCategory /> */}{" "}
        <main className="flex-1">
          <div className="flex flex-col justify-start items-start">
            <Homepage />
          </div>
        </main>
      </Element>{" "}
    </>
  );
}

Dashboard.Layout = HomeLayout;

// Dashboard.authenticate = {
//   permissions: adminOnly,
// };
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  if (locale) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "table",
          "widgets",
          "banner",
        ])),
        // userPermissions: permissions,
      },
    };
  }
  return {
    props: {
      // userPermissions: permissions,
    },
  };
};
