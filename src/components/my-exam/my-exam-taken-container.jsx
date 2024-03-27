import React from "react";
import Button from "../ui/button";

const MyExamTakenContainer = ({ data }) => {
  const { exam } = data;
  return (
    <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
      <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-xl font-semibold text-left text-[#222]">
          {exam.category_name}
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-xl font-semibold text-left text-[#222]">
          Taken: 1st
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] font-bold text-left text-[#727272]">
            Exam Result
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            : 500 / 1000 (
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] italic text-left text-[#727272]">
            84%{" "}
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            )
          </span>
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] font-bold text-left text-[#727272]">
            First Category
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            : 86 / 100 (
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] italic text-left text-[#727272]">
            84%{" "}
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            )
          </span>
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] font-bold text-left text-[#727272]">
            Second Category
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            : 86 / 100 (
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] italic text-left text-[#727272]">
            84%{" "}
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            )
          </span>
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] font-bold text-left text-[#727272]">
            Third Category
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            : 86 / 100 (
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] italic text-left text-[#727272]">
            84%{" "}
          </span>
          <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[15px] text-left text-[#727272]">
            )
          </span>
        </p>
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[11px] font-bold text-left text-[#727272]">
          Date Finished: 7/24/2002
        </p>
      </div>

      <Button class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 bg-[#41b2f3] text-white">
        {" "}
        Review questions answered
      </Button>
    </div>
  );
};

export default MyExamTakenContainer;
