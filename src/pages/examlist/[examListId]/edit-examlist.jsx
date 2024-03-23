import EditExamListForm from "@components/dashboard/examlist/EditExamListForm";
import { usePerExamListQuery } from "@data/examlist/use-per-examlist.query";
import { adminOnly } from "@utils/auth-utils";
import Layout from "@components/layouts/admin";
import { useRouter } from "next/router";

export default function UpdateExamListPage() {
  const { query } = useRouter();
  console.log("qyuery", query);
  const {
    data,
    isLoading: loading,
    error,
  } = usePerExamListQuery(query.examListId);
  // if (loading) return <Loader text={t("common:text-loading")} />;
  // if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <div>Loading</div>;
  return (
    <>
      <div class="flex flex-col justify-center items-start w-full overflow-hidden gap-[30px] p-[30px] rounded-[5px] bg-white">
        <div class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-5 bg-[#afc4cf]">
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#222]">
              Add Examination
            </p>
          </div>
        </div>
        <EditExamListForm initialValues={data} />
      </div>
    </>
  );
}
UpdateExamListPage.authenticate = {
  permissions: adminOnly,
};
UpdateExamListPage.Layout = Layout;