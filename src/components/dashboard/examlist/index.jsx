import { useState } from "react";
import ExamTitleContainer from "./ExamTitleContainer";
import ExamMainContainer from "./ExamMainContainer";
import { useExamlistQuery } from "@data/examlist/use-examlist.query";
import PageLoader from "../../ui/page-loader";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import { useUI } from "../../../contexts/ui.context";
import Card from "../../common/card";
export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { data: me } = usePerExaminee();
  const { isAuthorize } = useUI();
  const {
    data,
    isLoading: loading,
    error,
  } = useExamlistQuery({ limit: 20, page, text: searchTerm });
  if (loading) return <PageLoader />;
  return (
    <>
      <div className="flex flex-col justify-start items-center self-stretch gap-[15px]">
        <div className="flex flex-col justify-start items-center self-stretch h-[90vh] gap-[15px]">
          {" "}
          <Card className={"w-full text-center text-xl text-bold"}>
            Hi, {me?.me.name ?? "there"} This is your exam list
          </Card>
          {!me?.me && (
            <Card className={"w-full text-center"}>
              You are currently not logged in.
            </Card>
          )}
          <div className="main-container w-full h-full overflow-scroll">
            {(!isAuthorize ? data?.examlist?.data : me?.me?.allExams)?.map(
              (item, index) => (
                <ExamMainContainer userId={me?.id} key={index} item={item} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
