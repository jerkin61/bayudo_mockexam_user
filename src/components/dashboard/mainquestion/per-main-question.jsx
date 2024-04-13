import React, { useEffect } from "react";
import PerChoiceContainer from "./per-choice-container";
import cn from "classnames";
import Alert from "../../ui/alert";
import { useAnswerExamMutation } from "@data/answer/use-answer.mutation";
import { useUpdateAnswerExamMutation } from "@data/answer/use-update-answer.mutation";
import { usePerAnswerQuery } from "@data/answer/use-per-answer.query";
import { useRouter } from "next/router";
import PageLoader from "../../ui/page-loader";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import { useModalAction } from "@components/ui/modal/modal.context";
import { usePerQuestionFeedbackQueryByQuestionId } from "@data/question-feedback/use-per-question-feedback.query";
import { permissions } from "../../../contexts/ui.context";
const classes = {
  root: "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[#fbfdff] cursor-pointer",
  normal:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[#fbfdff] cursor-pointer",
  correct:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[green] cursor-pointer",
  wrong:
    "flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px]  hover:bg-[#b2e3ff] hover:text-white bg-[red] cursor-pointer",
};
const PerMainQuestion = ({
  completeExam,
  updateExamCategoryLoading,
  checkCompleted,
  questionLastPage,
  lastPage,
  examCategoryTaken,
  loadingMore,
  questionNumber,
  isFirst,
  question,
  className,
  nextPageScroll,
  previousPageScroll,
  locked,
}) => {
  const { openModal } = useModalAction();
  const { data: me, loading: meLoading } = usePerExaminee();
  const { choices, id, right_ans, explanation } = question;
  const [errorMsg, setErrorMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("");
  const [selectedKey, setSelectedKey] = React.useState(null);
  const [rightOrWrong, setRightOrWrong] = React.useState(null);
  const [idx, setIdx] = React.useState("");
  const [showComplate, setShowComplete] = React.useState(true);
  const router = useRouter();
  const { data: questionFeedbackData, loading } =
    usePerQuestionFeedbackQueryByQuestionId({ id });
  const { mutateAsync: answerExam, isLoading: answerExamLoading } =
    useAnswerExamMutation();
  const { mutateAsync: updateAnswerExam, isLoading: updateAnswerExamLoading } =
    useUpdateAnswerExamMutation();
  const { data, isLoading: answerIsLoading } = usePerAnswerQuery({
    id: questionNumber,
    examCategoryTaken,
  });
  const showFeedbackModal = () => {
    openModal("QUESTION_FEEDBACK", { question, me });
  };
  const onSelectKey = (key) => {
    setSelectedKey(key);
    const payload = {
      exam_taken_category_id: examCategoryTaken,
      user_answer: key,
      question_no: questionNumber,
      answered_id: id,
      right_answer: right_ans,
      correct: right_ans === key,
    };
    if (!data && !idx)
      answerExam(payload, {
        onSuccess: async ({ id }) => {
          setIdx(id);
        },
      });
    else {
      updateAnswerExam({ id: data ? data.id : idx, payload });
    }
  };
  useEffect(() => {
    if (data) setSelectedKey(data.user_answer);
  }, [data]);
  useEffect(() => {
    if (locked && selectedKey) checkAnswer();
  }, [selectedKey]);
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
      setShowComplete(false);
    }
  };
  console.log("permissions", permissions);
  const completeExamButtonTrigger = () => {
    completeExam();
  };
  const creatingData = answerExamLoading || updateAnswerExamLoading;
  const isFirstCheck = isFirst === "0-0" || creatingData;
  const isLastCheck = isFirst === `${questionLastPage - 1}-0` || creatingData;
  if (answerIsLoading) return <PageLoader />;
  return (
    <div className="flex flex-col justify-between items-center p-[25px] h-full flex justify-center items-center h-full overflow-x-scroll">
      <div className="flex flex-col justify-start items-center self-stretch gap-[15px]">
        <div className="flex flex-col justify-start items-start self-stretch gap-2.5">
          {" "}
          <div className="w-full h-6">
            {errorMsg && permissions === "staff" && (
              <span
                className="relative flex flex-end justify-end"
                onClick={showFeedbackModal}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#CCCCCC"
                  ></path>
                </svg>
              </span>
            )}
          </div>
          <div className="flex flex-col align-center w-full self-stretch relative gap-2.5 px-5 py-2.5 rounded-[5px]">
            <span
              className="w-full self-stretch w-[324px] text-base font-semibold text-center text-white"
              dangerouslySetInnerHTML={{
                __html:
                  question.exam_category.category_name +
                  ": " +
                  question.question,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5">
          {choices &&
            JSON.parse(choices)
              .sort((a, b) => a.key.localeCompare(b.key))
              .map((choice) => (
                <PerChoiceContainer
                  locked={locked}
                  isLoading={answerExamLoading || updateAnswerExamLoading}
                  classesName={classesName}
                  choice={choice}
                  key={choice.key}
                  rightAnswer={question.right_ans}
                  className={className}
                  type={choice.key === choice.right_ans}
                  selected={selectedKey === choice.key}
                  setRightOrWrong={setRightOrWrong}
                  rightOrWrong={rightOrWrong}
                  onSelect={onSelectKey}
                />
              ))}{" "}
        </div>{" "}
        <div className="flex flex-row w-full self-stretch gap-[20px]">
          {" "}
          <button
            disabled={isFirstCheck}
            className=" mt-6 w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            onClick={previousPageScroll}
            style={{
              opacity: isFirstCheck ? 0.5 : 1,
              cursor: isFirstCheck && "not-allowed",
            }}
          >
            {"Previous page"}
          </button>{" "}
          <button
            disabled={isLastCheck}
            className=" mt-6 w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            onClick={nextPageScroll}
            style={{
              opacity: isLastCheck ? 0.5 : 1,
              cursor: isLastCheck && "not-allowed",
            }}
          >
            {"Next page"}
          </button>
        </div>
        {!lastPage && !locked && (
          <button
            disabled={updateExamCategoryLoading}
            onClick={completeExamButtonTrigger}
            className="last-page-button hidden mt-6 w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            style={{
              opacity: updateExamCategoryLoading ? 0.5 : 1,
              cursor: updateExamCategoryLoading && "not-allowed",
            }}
          >
            Complete Exam
          </button>
        )}
        {!lastPage && locked && !showComplate && (
          <button
            onClick={completeExamButtonTrigger}
            className="last-page-button hidden  w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
            End of review
          </button>
        )}{" "}
        {errorMsg && (
          <button
            className=" mt-6 w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            onClick={() => openModal("CHECK_EXPLANATION", { explanation })}
          >
            Check explanation
          </button>
        )}
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

export default PerMainQuestion;
