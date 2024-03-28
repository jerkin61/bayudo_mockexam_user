import React from "react";
import PerChoiceContainer from "./per-choice-container";
import cn from "classnames";
import Alert from "../../ui/alert";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const classes = {
  root: "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[#fbfdff] cursor-pointer",
  normal:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[#fbfdff] cursor-pointer",
  correct:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[green] cursor-pointer",
  wrong:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[red] cursor-pointer",
};
const PerRandomQuestion = ({
  question,
  setVideoRef,
  className,
  nextPageScroll,
}) => {
  const { choices } = question;
  const [errorMsg, setErrorMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("");
  const [selectedKey, setSelectedKey] = React.useState(null);
  const videoRef = React.useRef(null);
  const [rightOrWrong, setRightOrWrong] = React.useState(null);
  const classesName = cn(
    classes.root,
    {
      [classes.normal]: rightOrWrong === null,
      [classes.correct]: rightOrWrong,
      [classes.wrong]: rightOrWrong === false,
    },
    className
  );
  const checkAnswer = () => {
    if (selectedKey) {
      const thisAnswer = selectedKey === question.right_ans;
      setRightOrWrong(thisAnswer);
      setAlertType(thisAnswer ? "success" : "error");
      setErrorMsg(thisAnswer ? "Youre correct" : "Youre wrong");
    }
  };
  return (
    <div
      className="flex flex-col justify-between items-center p-[25px] h-full flex justify-center items-center h-full overflow-x-scroll"
      ref={(ref) => {
        videoRef.current = ref;
        setVideoRef(ref);
      }}
    >
      <div className="flex flex-col justify-start items-center self-stretch gap-[15px]">
        <div className="flex flex-col justify-start items-start self-stretch gap-2.5">
          <div className="flex flex-col align-center w-full self-stretch relative gap-2.5 px-5 py-2.5 rounded-[5px]">
            {/* <span className="text-white text-bold">
              {question.exam_category.category_name}
            </span> */}
            <span
              className="w-full self-stretch w-[324px] text-base font-semibold text-center text-white"
              dangerouslySetInnerHTML={{
                __html:
                  question.exam_category.category_name +
                  ":" +
                  question.question,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5">
          {choices &&
            JSON.parse(choices).map((choice) => (
              <PerChoiceContainer
                classesName={classesName}
                choice={choice}
                key={choice.key}
                rightAnswer={question.right_ans}
                className={className}
                type={choice.key === choice.right_ans}
                selected={selectedKey === choice.key}
                setRightOrWrong={setRightOrWrong}
                rightOrWrong={rightOrWrong}
                onSelect={(key) => {
                  // setAlertType("info");
                  // setErrorMsg(
                  //   `You selected ${key}. Tap confirm to check answer.`
                  // );
                  setSelectedKey(key);
                }}
              />
            ))}{" "}
        </div>{" "}
        {selectedKey && (
          <button
            className=" mt-6 w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            onClick={rightOrWrong === null ? checkAnswer : nextPageScroll}
          >
            {rightOrWrong === null ? "Confirm" : "Next page"}
          </button>
        )}{" "}
        {/* <button className="bg-[red] h-[10px]" onClick={nextPageScroll}>
          Test
        </button> */}
        {errorMsg && (
          <Alert
            variant={alertType}
            message={errorMsg}
            className="w-full"
            closeable={true}
            onClose={() => setErrorMsg("")}
          />
        )}
      </div>
    </div>
  );
};

export default PerRandomQuestion;
