import { useState } from "react";
import ExamTitleContainer from "./ExamTitleContainer";
import ExamMainContainer from "./ExamMainContainer";
import { useExamlistQuery } from "@data/examlist/use-examlist.query";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading: loading,
    error,
  } = useExamlistQuery({ limit: 20, page, text: searchTerm });
  console.log("data", data?.examlist.data);

  return (
    <>
      <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px]">
        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90vh] gap-[15px]">
          <ExamTitleContainer />
          <div className="main-container w-full h-full overflow-scroll">
            {data?.examlist.data.map((item, index) => (
              <ExamMainContainer key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
