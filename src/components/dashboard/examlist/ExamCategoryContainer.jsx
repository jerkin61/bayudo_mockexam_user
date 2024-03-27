import NextLink from "next/link";
import ActionButtons from "@components/common/action-button";
import { useRouter } from "next/router";
import React from "react";
import dayjs from "dayjs";
import { useModalAction } from "../../ui/modal/modal.context";
import Button from "../../ui/button";
import { useExamTakenMutation } from "@data/examtaken/use-examtaken.mutation";
import { usePerExamTaken } from "@data/examtaken/use-per-examtaken.query";

const ExamCategoryContainer = ({ item, index, examName, examListId }) => {
  const { openModal } = useModalAction();
  const {
    id,
    category_name,
    created_at,
    description,
    instruction,
    items_count,
    time_limit,
    time_limit_per_item,
    exam_id,
  } = item;

  const { mutateAsync: craeteExamTaken, isLoading: craeteExamTakenLoading } =
    useExamTakenMutation();

  // "id": 1,
  // 		"user_id": 6,
  // 		"exam_id": 3,
  // 		"take": 1,
  // 		"time_done": "2024-03-24 16:23:23",
  // 		"time_started": "2024-03-24 16:23:23",
  // 		"number_of_items": 132,
  // 		"pass": 0,
  // 		"exam_result": 432,
  // 		"exam_percentage": 0.2,
  console.log("dataPerExamCategory", examListId);
  const { data: dataPerExamCategory, isLoading: dataPerExamCategoryLoading } =
    usePerExamTaken(examListId);
  console.log("itemmmm", dataPerExamCategory);
  const confirmCreateExamTaken = () => {
    const payload = {
      user_id: 6,
      exam_id,
      take: 1,
      time_done: "2024-03-24 16:23:23",
      time_started: "2024-03-24 16:23:23",
      exam_percentage: 0,
      number_of_items: 20,
    };
    craeteExamTaken(payload, {
      onSuccess: async ({ id: examTaken }) => {
        openModal("SELECT_EXAMTYPE", { examTaken, item, examName });

        // await router.push(
        //   `/maintest/question/${examTaken}/${examCategoryId}/show-question`
        // );
      },
      onError: ({ response }) => {
        openModal("SELECT_EXAMTYPE", {
          examTaken: dataPerExamCategory?.id,
          item,
          examName,
        });
      },
    });
  };
  const router = useRouter();
  return (
    <div
      key={index}
      // onClick={() => openModal("SELECT_EXAMTYPE")}
      class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2] hover:bg-[#afc4cf]"
    >
      <div class="exam-category-container flex flex-col justify-center items-start flex-grow relative gap-2.5 w-[80%]">
        <p class="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#222]">
          {category_name}
        </p>
        <div class="flex justify-start items-start self-stretch flex-col flex-shrink-0 relative gap-[50px]">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] text-left text-[#727272]">
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] font-bold text-left text-[#727272]">
                Quiz items:
              </span>
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] text-left text-[#727272]">
                {items_count}
              </span>
              <br />
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] font-bold text-left text-[#727272]">
                Time limit:
              </span>
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] text-left text-[#727272]">
                {time_limit}
              </span>
              <br />
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] font-bold text-left text-[#727272]">
                Per Item:
              </span>
              <span class="flex-grow-0 flex-shrink-0 w-[253px] text-[15px] text-left text-[#727272]">
                {time_limit_per_item}
              </span>
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-[11px] font-bold text-left text-[#727272]">
              Date added: {dayjs(created_at).format("MMMM D, YYYY")}
            </p>
          </div>
          <p class="flex-grow text-[15px] text-left text-[#727272]">
            <span class="flex-grow text-[15px] font-bold text-left text-[#727272]">
              Description:
            </span>
            <span
              className="flex-grow text-[15px] text-left text-[#727272] wrap"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </p>
        </div>
      </div>

      {/* <ActionButtons
          id={id}
          editUrl={`${router.asPath}/${examListId}/${id}/edit-category`}
          deleteModalView="DELETE_EXAMCATEGORY"
        /> */}
      <div>
        {" "}
        <NextLink href={`/question/${id}/show-question`}>
          <Button type="normal"> Random Questions </Button>
        </NextLink>{" "}
        <Button onClick={confirmCreateExamTaken} type="normal">
          {" "}
          Take test{" "}
        </Button>
      </div>
    </div>
  );
};

export default ExamCategoryContainer;
