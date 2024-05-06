import React from "react";
import Button from "../ui/button";
import MyExamCategory from "./my-exam-category";
import dayjs from "dayjs";
const calculateTotals = (examCategoryTaken) => {
  let totalExamResult = 0;
  let totalNumberOfItems = 0;

  examCategoryTaken.forEach((item) => {
    totalExamResult += item.exam_result;
    totalNumberOfItems += item.number_of_items;
  });
  return {
    totalExamResult,
    totalNumberOfItems,
  };
};
const MyExamTakenContainer = ({ data }) => {
  const { exam, exam_category_taken, updated_at, take } = data;
  console.log("data", data);
  const { totalExamResult, totalNumberOfItems } =
    calculateTotals(exam_category_taken);
  return (
    <div className="flex flex-col justify-center items-start self-stretch overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white shadow rounded">
      <div className="flex flex-col justify-center items-start self-stretch relative gap-2.5">
        <div className="flex flex-col self-stretch w-full text-xl font-semibold text-left text-[#222]">
          <strong> Take {take}</strong>{" "}
          <span>
            {" "}
            <bold>Exam Name : </bold>
            {exam.name}
          </span>
        </div>
        <p className="self-stretch w-[323px] text-[15px] text-left text-[#140d0d]">
          <span className="self-stretch w-[323px] text-[15px] font-bold text-left text-[#140d0d]">
            Exam Result
          </span>
          <span className="self-stretch w-[323px] text-[15px] text-left text-[#140d0d]">
            : {totalExamResult + " / " + totalNumberOfItems}
          </span>
        </p>{" "}
        <p className="self-stretch w-[323px] text-[15px] text-left text-[#140d0d]">
          <span className="self-stretch w-[323px] text-[15px] italic text-left text-[#140d0d]">
            {" "}
            <span className="self-stretch w-[323px] text-[15px] font-bold text-left text-[#140d0d]">
              Exam Percentage
            </span>
            : {(totalExamResult / totalNumberOfItems).toFixed(2) * 100}%{" "}
          </span>
          <span className="self-stretch w-[323px] text-[15px] text-left text-[#140d0d]"></span>
        </p>
        {exam_category_taken?.map((data) => (
          <MyExamCategory data={data} />
        ))}
        <p className="self-stretch w-[323px] text-[11px] font-bold text-left text-[#140d0d]">
          {dayjs(updated_at).format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MyExamTakenContainer;
