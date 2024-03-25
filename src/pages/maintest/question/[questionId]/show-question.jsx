import dynamic from "next/dynamic";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@utils/auth-utils";
import HomeLayout from "@components/layout/home-layout";

const MainQuestionContainer = dynamic(() =>
  import("@components/dashboard/mainquestion")
);

// const inter = Inter({ subsets: ['latin'] })

export default function QuestionList() {
  return <MainQuestionContainer />;
}

QuestionList.Layout = HomeLayout;

export const getServerSideProps = async (ctx) => {
  const { token, permissions } = getAuthCredentials(ctx);
  // if (
  //   !isAuthenticated({ token, permissions }) ||
  //   !hasAccess(allowedRoles, permissions)
  // ) {
  //   return {
  //     redirect: {
  //       destination: "login",
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
