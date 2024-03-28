import React from "react";
import Button from "../ui/button";
import MyExamCategory from "./my-exam-category";
import dayjs from "dayjs";

const MyExamTakenContainer = ({ data }) => {
  console.log("MyExamTakenContainer", data);
  const { exam, exam_category_taken, updated_at } = data;
  return (
    <div className="flex flex-col justify-center items-start self-stretch overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
      <div className="flex flex-col justify-center items-start self-stretch relative gap-2.5">
        <p className="self-stretch w-[323px] text-xl font-semibold text-left text-[#222]">
          {exam.name}
        </p>
        {/* <p className="self-stretch w-[323px] text-xl font-semibold text-left text-[#222]">
          Taken: 1st
        </p> */}
        <p className="self-stretch w-[323px] text-[15px] text-left text-[#727272]">
          <span className="self-stretch w-[323px] text-[15px] font-bold text-left text-[#727272]">
            Exam Result
          </span>
          <span className="self-stretch w-[323px] text-[15px] text-left text-[#727272]">
            : 500 / 1000 (
          </span>
          <span className="self-stretch w-[323px] text-[15px] italic text-left text-[#727272]">
            84%{" "}
          </span>
          <span className="self-stretch w-[323px] text-[15px] text-left text-[#727272]">
            )
          </span>
        </p>
        {exam_category_taken?.map((data) => (
          <MyExamCategory data={data} />
        ))}

        <p className="self-stretch w-[323px] text-[11px] font-bold text-left text-[#727272]">
          {dayjs(updated_at).format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MyExamTakenContainer;
