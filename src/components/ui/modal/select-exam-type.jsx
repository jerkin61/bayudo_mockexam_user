import NextLink from "next/link";
import Button from "../button";
import { useExamCategoryTakenMutation } from "@data/examcategorytaken/use-examcategorytaken.mutation";
import { usePerExamCategoryTaken } from "@data/examcategorytaken/use-per-examcategorytaken.query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const SelectExamType = ({ data }) => {
  const router = useRouter();
  const { item, examName, examTaken } = data;
  const {
    exam_id,
    category_name,
    updated_at,
    items_count,
    instruction,
    time_limit_per_item,
    id,
  } = item;
  console.log("examTaken", item);
  console.log("examTaken", id);
  const {
    mutateAsync: craeteExamCategory,
    isLoading: craeteExamCategoryLoading,
  } = useExamCategoryTakenMutation();
  const { data: dataPerExamCategory, isLoading: dataPerExamCategoryLoading } =
    usePerExamCategoryTaken(id);

  console.log("dataPerExamCategoryaaaa", dataPerExamCategory);
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
          `/maintest/question/${examTaken}/${exam_category_id}/${examCategoryId}/show-question`
        );
      },
      onError: ({ response }) => {
        toast.error(response.data.exam_category_id[0]);
      },
    });
  };

  const confirmResumeTest = () => {
    dataPerExamCategory &&
      router.push(
        `/maintest/question/${examTaken}/${exam_category_id}/${id}/show-question`
      );
  };
  return (
    <div className="py-6 px-5 sm:p-8  w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center bg-[#f1f9ff]">
      <div class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
        <div class="flex flex-col justify-between items-center self-stretch flex-grow">
          <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[598px] gap-[15px]">
            <div class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
              <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 text-[18px] font-bold text-left text-[#222223]">
                  {examName}: {category_name}
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px] py-2.5">
              <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
                <div class="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-xl font-semibold text-left text-[#222]">
                    Welcome to your exam
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-xl text-left text-[#222]">
                    <span class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-xl text-left text-[#222]">
                      Examination instructions:{" "}
                    </span>
                    <br />
                    {instruction}
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[323px] text-[11px] font-bold text-left text-[#727272]">
                    Date Finished: 7/24/2002
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 p-2.5 rounded-[5px] bg-white">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 bg-[#41b2f3]">
              <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
                Cancel
              </p>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.53601 22.386C5.69777 22.4701 5.8794 22.5086 6.06139 22.4974C6.24338 22.4861 6.41886 22.4255 6.56901 22.322L19.569 13.322C19.7018 13.23 19.8104 13.1071 19.8854 12.964C19.9604 12.8208 19.9995 12.6616 19.9995 12.5C19.9995 12.3384 19.9604 12.1792 19.8854 12.036C19.8104 11.8929 19.7018 11.77 19.569 11.678L6.56901 2.678C6.41915 2.57345 6.24346 2.51206 6.0611 2.5005C5.87874 2.48895 5.69671 2.52768 5.53486 2.61248C5.373 2.69727 5.23753 2.82488 5.14322 2.98138C5.0489 3.13788 4.99937 3.31727 5.00001 3.5V21.5C4.99998 21.6825 5.04991 21.8616 5.14439 22.0178C5.23888 22.174 5.37431 22.3013 5.53601 22.386ZM7.00001 5.409L17.243 12.5L7.00001 19.591V5.409Z"
                  fill="#14130A"
                ></path>
              </svg>
            </div>
            {/* <NextLink href={`/maintest/question/${id}/show-question`}> */}
            <div className="flex flex-row gap-[10px]">
              <Button type="normal" onClick={confirmResumeTest}>
                {" "}
                Resume Exam{" "}
              </Button>{" "}
              <Button type="normal" onClick={confirmStartTest}>
                {" "}
                Start the exam{" "}
              </Button>
            </div>
            {/* </NextLink>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExamType;
