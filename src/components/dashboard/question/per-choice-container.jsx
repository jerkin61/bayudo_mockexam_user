import React from "react";

const getBackgroundColor = (selected, rightOrWrong, choiceKey, rightAnswer) => {
  if (selected) {
    return rightOrWrong !== null ? (rightOrWrong ? "green" : "red") : "#b2e3ff";
  } else {
    return rightOrWrong !== null && choiceKey === rightAnswer
      ? "lightgreen"
      : "";
  }
};
const getCursor = (rightOrWrong) => {
  return rightOrWrong !== null ? "not-allowed" : "pointer";
};
const PerChoiceContainer = ({
  choice,
  classesName,
  index,
  type,
  className,
  selected,
  onSelect,
  rightAnswer,
  rightOrWrong,
}) => {
  const isCorrect = choice.key === rightAnswer;
  return (
    <button
      disabled={rightOrWrong !== null}
      onClick={() => onSelect(choice.key)}
      className={
        "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[#fbfdff] cursor-pointer"
      }
      style={{
        backgroundColor: getBackgroundColor(
          selected,
          rightOrWrong,
          choice.key,
          rightAnswer
        ),
        cursor: getCursor(rightOrWrong),
      }}
    >
      {" "}
      <div>
        {" "}
        <span className="absolute uppercase w-[32px] h-[32px] align-center text-center transform -translate-x-[16px] translate-y-[4px]">
          {choice.key}
        </span>
        {selected ? (
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
    </button>
  );
};

export default PerChoiceContainer;
