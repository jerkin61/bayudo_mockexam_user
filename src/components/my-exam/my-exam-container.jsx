import React from "react";
import Button from "../ui/button";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import { useExamTakenQuery } from "@data/examtaken/use-examtaken.query";
import MyExamTakenContainer from "./my-exam-taken-container";

const MyExamContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { data: me, loading: meLoading } = usePerExaminee();
  const { data } = useExamTakenQuery({ limit: 20, page, text: searchTerm });
  console.log("me", me);
  console.log("data", data);
  return (
    <div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
      <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px]">
        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[598px] gap-[15px]">
          <div class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#222223]">
                Your exams
              </p>
            </div>
          </div>

          <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px] py-2.5">
            <MyExamTakenContainer />
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExamContainer;
