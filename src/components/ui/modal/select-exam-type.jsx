import NextLink from "next/link";
import Button from "../button";
import { useExamCategoryTakenMutation } from "@data/examcategorytaken/use-examcategorytaken.mutation";
import { usePerExamCategoryTaken } from "@data/examcategorytaken/use-per-examcategorytaken.query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const SelectExamType = ({ data }) => {
  console.log("daaatttaa", data);
  const router = useRouter();
  const { item, examName, examTaken } = data;
  const { category_name, items_count, instruction, id } = item;

  const {
    mutateAsync: craeteExamCategory,
    isLoading: craeteExamCategoryLoading,
  } = useExamCategoryTakenMutation();
  const { data: dataPerExamCategory, isLoading: dataPerExamCategoryLoading } =
    usePerExamCategoryTaken(id);

  const exam_category_id = dataPerExamCategory?.id;
  const confirmStartTest = () => {
    const payload = {
      exam_taken_id: examTaken,
      time_done: null,
      number_of_items: items_count,
      pass: 0,
      exam_result: 0,
      exam_percentage: 0,
      exam_category_id: id,
    };
    craeteExamCategory(payload, {
      onSuccess: async ({ id: examCategoryId }) => {
        await router.push(
          `/maintest/question/${examTaken}/${examCategoryId}/${id}/show-question`
        );
      },
      onError: ({ response }) => {
        // toast.error(response.data.exam_category_id[0]);
        toast.error("Something went wrong");
      },
    });
  };
  console.log("dataPerExamCategory", dataPerExamCategory);
  const confirmResumeTest = () => {
    dataPerExamCategory &&
      router.push(
        `/maintest/question/${examTaken}/${exam_category_id}/${id}/show-question`
      );
  };
  return (
    <div className="py-6 px-5 sm:p-8  w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center bg-[#f1f9ff]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
        <div className="flex flex-col justify-between items-center self-stretch flex-grow">
          <div className="flex flex-col justify-start items-center self-stretch h-[598px] gap-[15px]">
            <div className="flex flex-col justify-center items-center self-stretch h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
              <div className="flex justify-center items-center relative gap-2.5">
                <p className="text-[18px] font-bold text-left text-[#222223]">
                  {examName}: {category_name}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5 h-[90%]">
              <div className="flex justify-start items-start self-stretch gap-2.5 px-5 rounded-[5px] bg-white overflow-scroll h-full w-full">
                <div className="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                  <p className="self-stretch w-full text-xl font-semibold text-left text-[#222]">
                    Welcome to your exam
                  </p>

                  <div dangerouslySetInnerHTML={{ __html: instruction }} />

                  <p className="self-stretch w-full text-[11px] font-bold text-left text-[#140d0d]">
                    Date Finished: 7/24/2002
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[10px] w-full justify-between">
            <Button
              disabled={!dataPerExamCategory}
              type="normal"
              onClick={confirmResumeTest}
            >
              {" "}
              Resume Exam{" "}
            </Button>{" "}
            <Button
              type="normal"
              disabled={dataPerExamCategoryLoading || dataPerExamCategory}
              onClick={confirmStartTest}
            >
              {" "}
              Start the exam{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExamType;
