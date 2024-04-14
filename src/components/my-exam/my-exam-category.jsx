import Link from "next/link";
import React from "react";
import Button from "../ui/button";
import dayjs from "dayjs";

const MyExamCategory = ({ data }) => {
  console.log("MyExamCategory", data);
  const {
    completed,
    exam_category,
    exam_taken_id,
    number_of_items,
    exam_result,
    exam_percentage,
    id,
    exam_category_id,
    updated_at,
  } = data;
  return (
    <div className="p-4 self-stretch text-[15px] text-left text-[#140d0d] flex flex-col gap-2 w-full gap-[20px] border border-l-5 border-gray-400">
      <span className="self-stretch text-[15px] font-bold text-left text-[#140d0d]">
        Exam Category: {exam_category.category_name}
      </span>
      <span className="self-stretch text-[15px] text-left text-[#140d0d]">
        Exam result / items: {exam_result} / {number_of_items}
      </span>
      <span className="self-stretch text-[15px] text-left text-[#140d0d]">
        Status: {completed ? "Completed" : "Not completed"}
      </span>
      <span className="self-stretch text-[15px] italic text-left text-[#140d0d]">
        Percentage: {exam_percentage} %
      </span>
      <span className="self-stretch text-[15px] italic text-left text-[#140d0d]">
        {completed ? "Completed" : "Updated"} on :{" "}
        {dayjs(updated_at).format("MMMM D, YYYY")}
      </span>
      <span className="self-stretch flex flex-row text-[15px] gap-[10px] text-left text-[#140d0d]">
        <Link
          href={`/maintest/question/${exam_taken_id}/${id}/${exam_category_id}/show-question?completed=true`}
        >
          <Button className="flex flex-row gap-3">
            {" "}
            <p>{completed ? "Review Exam" : "Continue Exam"}</p>{" "}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M18 19.5H6C5.45 19.5 5 19.05 5 18.5V6.5C5 5.95 5.45 5.5 6 5.5H11C11.55 5.5 12 5.05 12 4.5C12 3.95 11.55 3.5 11 3.5H5C4.46957 3.5 3.96086 3.71071 3.58579 4.08579C3.21071 4.46086 3 4.96957 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H19C20.1 21.5 21 20.6 21 19.5V13.5C21 12.95 20.55 12.5 20 12.5C19.45 12.5 19 12.95 19 13.5V18.5C19 19.05 18.55 19.5 18 19.5ZM14 4.5C14 5.05 14.45 5.5 15 5.5H17.59L8.46 14.63C8.27302 14.817 8.16798 15.0706 8.16798 15.335C8.16798 15.5994 8.27302 15.853 8.46 16.04C8.64698 16.227 8.90057 16.332 9.165 16.332C9.42943 16.332 9.68302 16.227 9.87 16.04L19 6.91V9.5C19 10.05 19.45 10.5 20 10.5C20.55 10.5 21 10.05 21 9.5V4.5C21 3.95 20.55 3.5 20 3.5H15C14.45 3.5 14 3.95 14 4.5Z"
                fill="#545454"
              ></path>
            </svg>
          </Button>
        </Link>{" "}
      </span>
    </div>
  );
};

export default MyExamCategory;
