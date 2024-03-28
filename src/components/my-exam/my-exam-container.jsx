import React from "react";
import Button from "../ui/button";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import { useExamTakenQuery } from "@data/examtaken/use-examtaken.query";
import MyExamTakenContainer from "./my-exam-taken-container";
import { useRouter } from "next/router";
import PageLoader from "../ui/page-loader";

const MyExamContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { data: me, loading: meLoading } = usePerExaminee();
  const { data, loading } = useExamTakenQuery({
    limit: 20,
    page,
    text: searchTerm,
  });
  const { query } = useRouter();
  console.log("me", query?.text);
  console.log("data", data);
  if (loading) return <PageLoader />;
  return (
    <div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
      <div class="flex flex-col justify-start items-center self-stretch gap-[15px]">
        <div class="flex flex-col justify-start items-center self-stretch h-[598px] gap-[15px]">
          <div class="flex flex-col justify-center items-center self-stretch h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
            <div class="flex justify-center items-center relative gap-2.5">
              <p class="text-[28px] font-bold text-left text-[#222223]">
                Your exams
              </p>
            </div>
          </div>

          <div class="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5">
            {data &&
              data.data.map((data) => <MyExamTakenContainer data={data} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExamContainer;
