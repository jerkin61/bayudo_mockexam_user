import HomeLayout from "@components/layout/home-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Banner from "../components/common/banner";
import { useRouter } from "next/router";
import { useEffect } from "react";
const ExamListContainer = dynamic(() =>
  import("@components/dashboard/examlist")
);

export default function Dashboard({ userPermissions }) {
  return (
    <div>
      {" "}
      <div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px]">
          <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[598px] gap-[15px]">
            <div class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[168px] relative gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
              <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 text-[35px] font-bold text-left text-[#222223]">
                  Mock Test
                </p>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-xl italic text-left text-[#17181a]">
                for our hardworking students
              </p>
            </div>
            <ExamListContainer />

            {/* here */}
          </div>
        </div>
      </div>
      {/* <div>Test</div>
      <Banner banner={getPageData.banner} className="max-h-140" /> */}
    </div>
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
