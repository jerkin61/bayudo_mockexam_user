import dynamic from "next/dynamic";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@utils/auth-utils";
import HomeLayout from "@components/layout/home-layout";

const RandomQuestionContainer = dynamic(() =>
  import("@components/dashboard/question")
);

// const inter = Inter({ subsets: ['latin'] })

export default function QuestionList() {
  return <RandomQuestionContainer />;
}

QuestionList.Layout = HomeLayout;

export const getServerSideProps = async (ctx) => {
  console.log("ctx", ctx);
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
