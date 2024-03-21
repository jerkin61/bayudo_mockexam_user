import React from "react";

const PerRandomQuestion = ({ question, setVideoRef }) => {
  const [selected, setSelected] = React.useState();
  const { choices } = question;
  const videoRef = React.useRef(null);
  console.log("questtionnn", question);
  return (
    <div
      class="flex flex-col justify-between items-center p-[25px] h-full flex justify-center items-center h-full"
      ref={(ref) => {
        videoRef.current = ref;
        setVideoRef(ref);
      }}
    >
      <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px]">
        <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
          <div class="flex flex-col align-center w-full self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[5px]">
            {/* <span className="text-white text-bold">
              {question.exam_category.category_name}
            </span> */}
            <span
              class="w-full self-stretch flex-grow-0 flex-shrink-0 w-[324px] text-base font-semibold text-center text-white"
              dangerouslySetInnerHTML={{
                __html:
                  question.exam_category.category_name +
                  ":" +
                  question.question,
              }}
            />
          </div>
        </div>
        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px] py-2.5">
          {choices &&
            JSON.parse(choices).map((choice, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-[#fbfdff] hover:bg-[#b2e3ff] hover:text-white"
                style={{ backgroundColor: selected === index ? "#b2e3ff" : "" }}
              >
                {" "}
                <div>
                  {" "}
                  <span className="absolute uppercase w-[32px] h-[32px] align-center text-center translate-y-[4px]">
                    {choice.key}
                  </span>
                  {selected === index ? (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="13.5"
                        stroke="#D9D9D9"
                        stroke-width="5"
                      ></circle>
                    </svg>
                  ) : (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle>
                    </svg>
                  )}
                </div>
                <p
                  className="flex-grow w-[282px] text-base font-semibold text-center"
                  dangerouslySetInnerHTML={{ __html: choice.value }}
                />
              </div>
            ))}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default PerRandomQuestion;
