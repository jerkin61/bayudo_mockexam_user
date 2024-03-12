import HomeLayout from "@components/layout/home-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// const AdminDashboard = dynamic(() => import("@/components/dashboard/admin"));

// const inter = Inter({ subsets: ['latin'] })

export default function Dashboard({ userPermissions }) {
  return (
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
          <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px] py-2.5">
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="16" cy="16.5" r="16" fill="#D9D9D9"></circle>
              </svg>
              <div class="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                <p class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-xl font-semibold text-left text-[#222]">
                  ALE Exam 2023-2004
                </p>
                <p class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-[15px] text-left text-[#727272]">
                  <span class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-[15px] text-left text-[#727272]">
                    Quiz items: 500
                  </span>
                  <br />
                  <span class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-[15px] text-left text-[#727272]">
                    Time limit: 8 hrs per subject
                  </span>
                  <br />
                  <span class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-[15px] text-left text-[#727272]">
                    Catagories : 5
                  </span>
                </p>
                <p class="self-stretch flex-grow-0 flex-shrink-0 w-[281px] text-[11px] font-bold text-left text-[#727272]">
                  Date added: 7/24/2002
                </p>
              </div>
            </div>
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle>
              </svg>
            </div>
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-[#41b2f3]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="13.5"
                  stroke="#D9D9D9"
                  stroke-width="5"
                ></circle>
              </svg>
            </div>
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
