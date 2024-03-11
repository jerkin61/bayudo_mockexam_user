import HomeLayout from "@components/layout/home-layout";

// const AdminDashboard = dynamic(() => import("@/components/dashboard/admin"));

// const inter = Inter({ subsets: ['latin'] })

export default function Dashboard({ userPermissions }) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full relative overflow-hidden bg-[#2e2f30]">
      <div className="flex-grow-0 flex-shrink-0 w-[414px] h-11 relative overflow-hidden">
        <p className="absolute left-[132px] top-[13px] text-base font-semibold text-center text-white/60">
          Exam List
        </p>
        <p className="absolute left-[220px] top-[11px] text-lg font-semibold text-center text-white">
          Random
        </p>
      </div>
      <div className="flex flex-col justify-between items-center self-stretch flex-grow relative px-[25px]">
        <p className="self-stretch flex-grow w-full h-full text-3xl text-center text-white">
          In the dry season how many things in the world is a better place in
          the universe? Testing testing testing testing testing testing testing
          testing testing testing testing testing testing testing testing
          testing test
        </p>
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[364px] h-[70px] text-xl font-semibold text-center text-white">
            See Choices
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[62px] relative px-5">
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-5">
          <p className="w-[374px] absolute left-5 top-0 text-[17px] font-semibold text-left text-white">
            crop science
          </p>
        </div>
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden">
          <div className="w-[374px] h-[35px] absolute left-[-0.5px] top-[-1.5px]"></div>
          <div className="w-[134px] h-[5px] absolute left-[119.5px] top-[19.5px] rounded-[100px] bg-[#e9e9e9]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[366px] top-[430px] gap-[29px]">
        <div className="flex-grow-0 flex-shrink-0 w-[47px] h-[58.5px]">
          <img
            className="absolute left-[-0.5px] top-[-0.5px]"
            // src="ellipse-3.png"
          />
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[35px] h-[130.5px]">
          <div className="w-[34.25px] h-[50.5px] opacity-90">
            <p className="absolute left-[6.5px] top-[203px] text-[13px] font-semibold text-center text-white">
              Share
            </p>
          </div>
          <div className="w-[35px] h-[53.5px] opacity-90">
            <p className="absolute left-[12.5px] top-[126px] text-[13px] font-semibold text-center text-white">
              578
            </p>
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
  // const { token, permissions } = getAuthCredentials(ctx);
  // if (
  //   !isAuthenticated({ token, permissions }) ||
  //   !hasAccess(allowedRoles, permissions)
  // ) {
  //   console.log(
  //     "Redirecting to login, authentication or access failed",
  //     !isAuthenticated({ token, permissions }) ||
  //       !hasAccess(allowedRoles, permissions)
  //   );
  //   return {
  //     redirect: {
  //       destination: "/login", // Ensure the path is correctly specified
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      userPermissions: null,
    },
  };
};
