import React from "react";
import ExamCategoryContainer from "./ExamCategoryContainer";

const ExamCategory = ({ examCategory, examListId }) => {
  return (
    <div className="w-full">
      {" "}
      {!examCategory.length && (
        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2]">
          No category assigned
        </div>
      )}
      {examCategory &&
        examCategory.map((item, index) => (
          <ExamCategoryContainer
            item={item}
            index={index}
            examListId={examListId}
          />
        ))}
    </div>
  );
};

export default ExamCategory;
