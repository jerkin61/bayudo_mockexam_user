import React from "react";
import LandpageStarComponent from "./landpage-star-component";

const FeaturedClasses = () => {
  const featureClassesSectionDetails = {
    firstButton: {
      top: "25k+",
      bottom: "EXAMS",
    },
    secondButton: {
      top: "600k",
      bottom: "MEMBERS",
    },
    thirdButton: {
      top: "8K+",
      bottom: "MENTORS",
    },

    fourthButton: {
      top: "600k",
      bottom: "MEMBERS",
    },
    classesList: [
      { examName: "LEA Mock Exam" },
      { examName: "LEA Mock Exam" },
      { examName: "LEA Mock Exam" },
      { examName: "LEA Mock Exam" },
      { examName: "LEA Mock Exam" },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center  w-full overflow-hidden gap-2.5 px-[10px] md:px-[120px] py-[100px] bg-[#00b5f4]">
      <div className="flex flex-col justify-start items-start  gap-[100px] align-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-center  gap-[30px] self-center">
          <div className="flex flex-col justify-center items-center  relative overflow-hidden gap-1.5 px-[22px] py-[11px] rounded-[5px] bg-[#2d5af2]">
            <p className=" w-[124px] h-[37px] text-[32px] font-bold text-center text-white">
              {featureClassesSectionDetails.firstButton.top}
            </p>
            <p className=" w-[136px] h-[22px] text-base font-bold text-center text-[#e3f8ff]">
              {featureClassesSectionDetails.firstButton.bottom}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  relative overflow-hidden gap-1.5 px-[22px] py-[11px] rounded-[5px] bg-[#2d5af2]">
            <p className=" w-[124px] h-[37px] text-[32px] font-bold text-center text-white">
              {featureClassesSectionDetails.secondButton.top}
            </p>
            <p className=" w-[136px] h-[22px] text-base font-bold text-center text-[#e3f8ff]">
              {featureClassesSectionDetails.secondButton.bottom}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  relative overflow-hidden gap-1.5 px-[22px] py-[11px] rounded-[5px] bg-[#2d5af2]">
            <p className=" w-[124px] h-[37px] text-[32px] font-bold text-center text-white">
              {featureClassesSectionDetails.thirdButton.top}
            </p>
            <p className=" w-[136px] h-[22px] text-base font-bold text-center text-[#e3f8ff]">
              {featureClassesSectionDetails.thirdButton.bottom}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center self-stretch overflow-hidden px-2.5 rounded-[5px] bg-[#2d5af2]">
            <div className="flex flex-col justify-center items-center  relative overflow-hidden gap-1.5 px-[22px] py-[11px] rounded-[5px] bg-[#2d5af2]">
              <p className=" w-[124px] h-[37px] text-[32px] font-bold text-center text-white">
                {featureClassesSectionDetails.fourthButton.top}
              </p>
              <p className=" w-[136px] h-[22px] text-base font-bold text-center text-[#e3f8ff]">
                {featureClassesSectionDetails.fourthButton.bottom}
              </p>
            </div>
            <LandpageStarComponent />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch  gap-5">
          <div className="flex flex-col justify-center items-center self-stretch  gap-[9px]">
            <div className="flex justify-center items-center self-stretch  relative overflow-hidden gap-2.5 px-[143px] py-1.5">
              <p className=" w-[544px] h-[34px] text-3xl font-bold text-center text-white">
                Explore Challenging Exams
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[10px] w-full mb-4 text-start">
              {featureClassesSectionDetails.classesList.map(({ examName }) => (
                <a
                  type="button"
                  key={examName}
                  className="my-2 inline-block rounded-full px-6 pb-2 pt-2.5 leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#2d5af2] hover:shadow-lg focus:bg-[#2d5af2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2d5af2] active:shadow-lg dark:bg-whitedark:text-neutral-200 dark:hover:bg-[#2d5af2] dark:focus:bg-[#2d5af2] dark:active:bg-[#2d5af2] gap-2.5 py-2.5 rounded-[15px] border-2 border-white text-white text-[19px]"
                >
                  {examName}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-start items-center self-stretch  h-[294px] gap-5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden border-[3px] border-[#e58585]/[0.31]">
              <div className="self-stretch  w-[215.07px] h-[102px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
              <div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[5px] p-[5px] border border-[#e58585]/[0.31]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow relative border border-[#e58585]/[0.31]">
                  <div className="flex justify-start items-end self-stretch  h-7 relative gap-[89px] border border-[#e58585]/[0.31]">
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  </div>
                  <div className="self-stretch  w-[205.07px] h-[136px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  <div className="self-stretch flex-grow w-[205.07px] h-[18px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden border-[3px] border-[#e58585]/[0.31]">
              <div className="self-stretch  w-[215.07px] h-[102px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
              <div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[5px] p-[5px] border border-[#e58585]/[0.31]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow relative border border-[#e58585]/[0.31]">
                  <div className="flex justify-start items-end self-stretch  h-7 relative gap-[89px] border border-[#e58585]/[0.31]">
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  </div>
                  <div className="self-stretch  w-[205.07px] h-[136px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  <div className="self-stretch flex-grow w-[205.07px] h-[18px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden border-[3px] border-[#e58585]/[0.31]">
              <div className="self-stretch  w-[215.07px] h-[102px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
              <div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[5px] p-[5px] border border-[#e58585]/[0.31]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow relative border border-[#e58585]/[0.31]">
                  <div className="flex justify-start items-end self-stretch  h-7 relative gap-[89px] border border-[#e58585]/[0.31]">
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  </div>
                  <div className="self-stretch  w-[205.07px] h-[136px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  <div className="self-stretch flex-grow w-[205.07px] h-[18px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden border-[3px] border-[#e58585]/[0.31]">
              <div className="self-stretch  w-[215.07px] h-[102px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
              <div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[5px] p-[5px] border border-[#e58585]/[0.31]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow relative border border-[#e58585]/[0.31]">
                  <div className="flex justify-start items-end self-stretch  h-7 relative gap-[89px] border border-[#e58585]/[0.31]">
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                    <div className="self-stretch flex-grow w-[58.03px] h-7 relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  </div>
                  <div className="self-stretch  w-[205.07px] h-[136px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                  <div className="self-stretch flex-grow w-[205.07px] h-[18px] relative overflow-hidden border border-[#e58585]/[0.31]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClasses;
