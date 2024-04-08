import { QuestionFeedbackExamMutation } from "@data/question-feedback/use-question-feedback.mutation";
import { useUpdateQuestionFeedbackExamMutation } from "@data/question-feedback/use-update-question-feedback.mutation";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useModalAction } from "../../ui/modal/modal.context";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { usePerExaminee } from "@data/examinee/use-per-examinee.query";
import PageLoader from "../../ui/page-loader";

const CreateQuestionFeedback = ({ initialValues, question }) => {
  const { closeModal } = useModalAction();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...question,
    },
  });
  const changeQuillValue = (fieldName, value) => {
    setValue(fieldName, value);
  };
  const { data: me, loading: meLoading } = usePerExaminee();
  const { mutateAsync: createQuestionFeedback, isLoading: creating } =
    QuestionFeedbackExamMutation();
  const { mutateAsync: updateQuestionFeedback, isLoading: updating } =
    useUpdateQuestionFeedbackExamMutation();
  const queryClient = useQueryClient();

  const onSubmit = async (values) => {
    const input = {
      submitted_id: me?.me.id,
      suggested_question: values.question,
      suggested_answer: values.answer,
      suggested_choices: JSON.stringify(choiceList), // Assuming 'choices' is an array of objects
      time: parseFloat(values.time),
      suggested_right_ans: values.right_ans,
      suggested_explanation: values.explanation,
      user_feedback: values.user_feedback,
    };
    if (initialValues) {
      updateQuestionFeedback(
        {
          id: initialValues?.id,
          input: {
            ...input,
          },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["question-feedback"]);
            closeModal();
            toast.success("Suggestion are updated. Thanks for your input.");
          },
        },
        {
          onSettled: () => {},
        }
      );
    } else {
      createQuestionFeedback(
        {
          ...input,
          question_id: question.id,
        },
        {
          onSuccess: () => {
            closeModal();
            toast.success("Suggestion are added. Thanks for your input.");
          },
        },
        {
          onSettled: () => {
            queryClient.invalidateQueries(["question-feedback"]);
          },
        }
      );
    }
  };
  console.log(initialValues);
  const [choiceList, setChoiceList] = React.useState(
    question ? JSON.parse(question?.choices) : []
  );
  const [resetForm, setResetForm] = React.useState(false);
  const [currentChoices, setCurrentChoices] = React.useState({
    key: "",
    value: "",
  });
  const handleInputChange = (key, value) => {
    if (key === "key") {
      setCurrentChoices({ ...currentChoices, [key]: value });
    }
  };
  const changeAddChoices = (key, value) => {
    if (key === "value") {
      setCurrentChoices({ ...currentChoices, [key]: value });
    }
  };

  console.log("choice", choiceList);
  const handleAddChoiceClick = () => {
    console.log("trg", currentChoices);
    if (currentChoices.key && currentChoices.value) {
      setChoiceList([...choiceList, currentChoices]);
      setValue("choices", choiceList);
      setCurrentChoices({ key: "", value: "" });
      setResetForm(true);
    }
  };
  const handleRemoveChoice = (index) => {
    const updatedChoiceList = choiceList.filter((_, i) => i !== index);
    setChoiceList(updatedChoiceList);
  };
  if (meLoading) return <PageLoader />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {" "}
      <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5 p-2.5">
        <div class="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-5 flex-col">
          <div class="flex flex-col justify-start items-start flex-grow gap-2.5 w-full">
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5">
              <Input
                label="Right answer"
                {...register("right_ans", {
                  required: "Name is required",
                })}
                error={errors.right_ans?.message}
                variant="theme_blue"
                labelClass="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black w-40"
                className="flex justify-center items-center flex-grow relative gap-2.5"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5">
          <Input
            label="Question"
            longText={true}
            name="question"
            // {...register("description")}
            error={errors.question?.message}
            variant="theme_blue"
            labelClass="flex-grow-0 flex-shrink-0 w-full text-base font-bold text-left text-black"
            className="flex-col flex gap-[10px] flex-grow rounded-[10px] w-full"
            quillDefaultValue={question?.question}
            changeQuillValue={changeQuillValue}
            quillClass=" bg-[#e0ecf2]"
          />
        </div>

        <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5">
          <Input
            label="Explanation"
            longText={true}
            name="explanation"
            // {...register("description")}
            error={errors.question?.message}
            variant="theme_blue"
            labelClass="flex-grow-0 flex-shrink-0 w-full text-base font-bold text-left text-black"
            className="flex-col flex gap-[10px] flex-grow rounded-[10px] w-full"
            quillDefaultValue={question?.explanation}
            changeQuillValue={changeQuillValue}
            quillClass=" bg-[#e0ecf2]"
          />
        </div>
        <p className="self-stretch w-full text-[11px] font-bold text-left text-[#140d0d]">
          Add choice value first then add the choice key (a, b, c .. you can add
          up till j)
        </p>
        <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5 flex-col">
          <Input
            label="Choices (add them in any order)"
            longText={true}
            name="value"
            // {...register("description")}
            error={errors.choices?.message}
            variant="theme_blue"
            labelClass="flex-grow-0 flex-shrink-0 w-full text-base font-bold text-left text-black"
            className="flex-col flex gap-[10px] flex-grow rounded-[10px] w-full"
            quillDefaultValue={question?.choices}
            changeQuillValue={changeAddChoices}
            quillClass=" bg-[#e0ecf2]"
            iteratedAsDiv={true}
            setResetForm={setResetForm}
            resetForm={resetForm}
          />{" "}
          <div class="flex flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p class="flex-grow-0 flex-shrink-0 w-[103px] h-[19px] text-base font-bold text-left text-black">
                    Choice{" "}
                  </p>
                </div>{" "}
                <input
                  value={currentChoices.key}
                  onChange={(e) => handleInputChange("key", e.target.value)}
                  class="flex-grow-0 flex-shrink-0 w-[66px] h-[38px] rounded-[10px] bg-[#d9d9d9]/[0.27] border border-black"
                />
              </div>
            </div>
            <div class="flex flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <Button
                type="button"
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5 px-[15px] py-[7px] rounded-[10px] bg-[#e0ecf2]"
                onClick={handleAddChoiceClick}
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
                    d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
                    fill="#14130A"
                  ></path>
                </svg>
                <p class="flex-grow-0 flex-shrink-0 w-28 h-[19px] text-base font-bold text-left text-black">
                  Add Choice
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
          {choiceList?.map((choice, index) => (
            <div
              key={index}
              class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5"
            >
              <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2]">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative gap-2.5">
                  {choice.key}
                </div>
                <div class="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                  <span
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-black"
                    dangerouslySetInnerHTML={{ __html: choice.value }}
                  />
                </div>
                <div
                  class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-10 w-10 relative overflow-hidden gap-2.5"
                  onClick={() => handleRemoveChoice(index)}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="self-stretch flex-grow"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g filter="url(#filter0_d_250_630)">
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        fill="#D9D9D9"
                        fill-opacity="0.27"
                      ></circle>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_250_630"
                        x="-60"
                        y="-32"
                        width="160"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="28"></feOffset>
                        <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.15 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_250_630"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_250_630"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-6 h-6 absolute left-2 top-2"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M19 12.998H5V10.998H19V12.998Z"
                      fill="#14130A"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 px-2.5">
          <Input
            label="Input your feedback"
            longText={true}
            name="user_feedback"
            // {...register("description")}
            error={errors.question?.message}
            variant="theme_blue"
            labelClass="flex-grow-0 flex-shrink-0 w-full text-base font-bold text-left text-black"
            className="flex-col flex gap-[10px] flex-grow rounded-[10px] w-full"
            quillDefaultValue={initialValues?.user_feedback || ""}
            changeQuillValue={changeQuillValue}
            quillClass=" bg-[#e0ecf2]"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[312px] gap-10 p-2.5 rounded-[5px] bg-white">
          <div
            onClick={closeModal}
            class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-5 py-2.5 bg-[#41b2f3]"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
              Cancel
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-5 py-2.5 bg-[#41b2f3]">
            <Button
              type="submit"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateQuestionFeedback;
