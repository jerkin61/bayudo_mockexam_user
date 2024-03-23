import HomeLayout from "@components/layout/home-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Banner from "@components/common/banner";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller, Element } from "react-scroll";
const ExamListContainer = dynamic(() =>
  import("@components/dashboard/examlist")
);
export const sitePages = {
  main: {
    title: "Bakery - PickBazar",
    description: "Bakery Details",
    banner: {
      heading: "heading-mocktest",
      subheading: "subheading-bakery",
      image: "/banner/bakery.png",
    },
  },
};
export const getKeyValue = (obj, key) => obj[key];

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
  const getPageData = getKeyValue(sitePages, "main");
  return (
    <>
      <Banner banner={getPageData.banner} className="max-h-140 h-[300px]" />
      <Element name="grid">
        {/* <BakeryCategory /> */}
        <main className="flex-1">
          <div className="bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
              <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px]">
                <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[598px] gap-[15px]">
                  <ExamListContainer />
                </div>
              </div>
            </div>
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
  console.log("locale", locale);
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