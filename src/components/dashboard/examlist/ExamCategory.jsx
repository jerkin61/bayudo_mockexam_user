import React from "react";
import ExamCategoryContainer from "./ExamCategoryContainer";

const ExamCategory = ({ examCategory, examListId, examName }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {" "}
      {!examCategory.length && (
        <div class="flex justify-center items-center self-stretch relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2]">
          No category assigned
        </div>
      )}
      {examCategory &&
        examCategory.map((item, index) => (
          <ExamCategoryContainer
            examName={examName}
            item={item}
            index={index}
            examListId={examListId}
          />
        ))}
    </div>
  );
};

export default ExamCategory;
