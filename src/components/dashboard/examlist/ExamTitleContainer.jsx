import React from "react";

const ExamTitleContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch relative gap-2.5 p-5 bg-[#afc4cf]">
      <div className="flex justify-center items-center relative gap-2.5">
        <p className="text-[35px] font-bold text-left text-[#222223]">Exam</p>
      </div>
      <p className="text-xl italic text-left text-[#17181a]">
        add and help more students
      </p>
    </div>
  );
};

export default ExamTitleContainer;
