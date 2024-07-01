import React from "react";

const FeatureList = () => {
  const details = {
    title: "Prepare With Exam Refresher",
    info: [
      { text: "Pass your exams with practice tests" },
      { text: "Ensure success with personalized exams" },
      { text: "Improve your pass rates with custom exams" },
      { text: "Achieve passing scores with tailored practice exams" },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center self-stretch h-full overflow-hidden gap-2.5 px-[20px] md:px-[200px] py-[30px] bg-[#2d5af2]">
      <div className="flex flex-col md:flex-row w-full justify-center items-center self-stretch gap-[22.70290756225586px]">
        <div className="flex flex-col justify-center items-center self-stretch overflow-hidden gap-[5.537294864654541px] px-5">
          <div className="flex justify-center items-center self-stretch relative overflow-hidden gap-[5.537294864654541px] px-[9.967130661010742px]">
            <p className=" w-[210.97px] text-[28.79393196105957px] font-bold text-center text-white">
              {details.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2.5">
          {details.info.map((data, index) => (
            <div
              key={index}
              className="flex justify-center items-center self-stretch overflow-hidden gap-[25.149999618530273px] px-[11.074589729309082px]"
            >
              <div className="flex justify-center items-center relative gap-2.5">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    cx="9.229"
                    cy="9.94922"
                    r="8.91978"
                    fill="#D9D9D9"
                    stroke="white"
                    stroke-width="0.330362"
                  ></circle>
                </svg>
              </div>
              <div className="flex justify-start items-start relative gap-[5.537294864654541px]">
                <p className=" text-[17.719343185424805px] font-medium text-left text-white">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
