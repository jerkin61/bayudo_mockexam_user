import dynamic from "next/dynamic";
import HomeLayout from "@components/layout/home-layout";

const ExamCategoryCont = dynamic(() =>
  import("@components/dashboard/exam-category")
);

// const inter = Inter({ subsets: ['latin'] })

export default function ExamCategoryPage() {
  return <ExamCategoryCont />;
}
ExamCategoryPage.authenticate = {
  permissions: adminOnly,
};
ExamCategoryPage.Layout = HomeLayout;
