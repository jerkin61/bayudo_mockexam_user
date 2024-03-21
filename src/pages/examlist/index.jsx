import dynamic from "next/dynamic";
import {
  adminOnly,
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@utils/auth-utils";
import HomeLayout from "@components/layout/home-layout";

const ExamListDashboard = dynamic(() =>
  import("@components/dashboard/examlist")
);

// const inter = Inter({ subsets: ['latin'] })

export default function ExamList() {
  return <ExamListDashboard />;
}

ExamList.Layout = HomeLayout;

export const getServerSideProps = async (ctx) => {
  const { token, permissions } = getAuthCredentials(ctx);
  console.log(
    "  !isAuthenticated({ token, permissions }) ",
    !isAuthenticated({ token, permissions }),
    token,
    permissions
  );
  if (
    !isAuthenticated({ token, permissions }) ||
    !hasAccess(allowedRoles, permissions)
  ) {
    // return {
    //   redirect: {
    //     destination: "login",
    //     permanent: false,
    //   },
    // };
  }
  return {
    props: {
      userPermissions: permissions,
    },
  };
};
