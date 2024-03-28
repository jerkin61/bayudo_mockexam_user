import { useState } from "react";
import ExamTitleContainer from "./ExamTitleContainer";
import ExamMainContainer from "./ExamMainContainer";
import { useExamlistQuery } from "@data/examlist/use-examlist.query";
import PageLoader from "../../ui/page-loader";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
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
          <div className="main-container w-full h-full overflow-scroll">
            {data?.examlist?.data.map((item, index) => (
              <ExamMainContainer key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
