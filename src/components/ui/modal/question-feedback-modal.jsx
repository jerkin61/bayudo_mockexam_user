import { usePerQuestionFeedbackQueryByQuestionId } from "@data/question-feedback/use-per-question-feedback.query";
import CreateQuestionFeedback from "../../dashboard/question/CreateQuestionFeedback";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import PageLoader from "../page-loader";

const QuestionFeedbackModal = ({ data, closeModal }) => {
  const { question, questionFeedbackData } = data;
  const { id } = question;

  return (
    <div className="py-6 px-5 sm:p-8  w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center bg-[#f1f9ff]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
        <div className="flex flex-col justify-between items-center self-stretch flex-grow">
          <div className="flex flex-col justify-start items-center self-stretch h-[100vh] gap-[15px]">
            <div className="flex flex-col justify-center items-center self-stretch h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
              <div className="flex justify-center items-center relative gap-2.5">
                <p className="text-[18px] font-bold text-left text-[#222223]">
                  {/* {examName}: {category_name} */}
                  Question Feedback
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5 h-[90%]">
              <div className="flex justify-start items-start self-stretch gap-2.5 rounded-[5px] bg-white overflow-scroll h-full w-full">
                <div className="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                  {" "}
                  <div className="p-5 self-stretch w-full text-2 font-bold text-left text-[#140d0d]">
                    Please suggest edit here if you think that the answer is
                    incorrect. We will update it as soon as possible and notify
                    you regarding the update. We appreciate your support and
                    inputs for the accuracy of the exam.
                  </div>
                  {!questionFeedbackData ? (
                    <CreateQuestionFeedback
                      initialValues={questionFeedbackData}
                      question={question}
                    />
                  ) : (
                    <div>
                      There is already submitted feedback for this we will
                      review this. Once disapproved then you add your feedback
                      again.
                    </div>
                  )}
                  <p className="self-stretch w-full text-[11px] font-bold text-left text-[#140d0d]">
                    Date Finished: 7/24/2002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFeedbackModal;
