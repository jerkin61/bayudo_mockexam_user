import React from "react";
import ExamCategoryContainer from "./ExamCategoryContainer";

const ExamCategory = ({
  examCategory,
  examListId,
  examName,
  userId,
  examCreated,
  setExamCreated,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {" "}
      {!examCategory.length && (
        <div className="flex justify-center items-center self-stretch relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2]">
          No category assigned
        </div>
      )}
      {examCategory &&
        examCategory.map((item, index) => (
          <ExamCategoryContainer
            userId={userId}
            examName={examName}
            item={item}
            index={index}
            examListId={examListId}
            setExamCreated={setExamCreated}
            examCreated={examCreated}
          />
        ))}
    </div>
  );
};

export default ExamCategory;
