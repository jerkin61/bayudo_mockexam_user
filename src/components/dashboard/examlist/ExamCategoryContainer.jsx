import NextLink from "next/link";
import ActionButtons from "@components/common/action-button";
import { useRouter } from "next/router";
import React from "react";
import dayjs from "dayjs";
import { useModalAction } from "../../ui/modal/modal.context";
import Button from "../../ui/button";
import { useExamTakenMutation } from "@data/examtaken/use-examtaken.mutation";
import { usePerExamTaken } from "@data/examtaken/use-per-examtaken.query";
import PageLoader from "../../ui/page-loader";
import { sanitizeHTML } from "../../../utils/helper";
import { useQueryClient } from "react-query";

const ExamCategoryContainer = ({
  item,
  index,
  examName,
  examListId,
  userId,
}) => {
  const queryClient = useQueryClient();
  const { openModal } = useModalAction();
  const {
    id,
    slug,
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

  const {
    data: dataPerExamCategory,
    isLoading: dataPerExamCategoryLoading,
    refetch,
  } = usePerExamTaken(examListId);

  const confirmCreateExamTaken = async () => {
    const payload = {
      user_id: userId,
      exam_id,
      take: 1,
      time_done: "2024-03-24 16:23:23",
      time_started: "2024-03-24 16:23:23",
      exam_percentage: 0,
      number_of_items: 20,
    };
    if (!dataPerExamCategory) {
      craeteExamTaken(payload, {
        onSuccess: async ({ id: examTaken }) => {
          await refetch();
          openModal("SELECT_EXAMTYPE", { examTaken, item, examName });
        },
      });
    } else {
      openModal("SELECT_EXAMTYPE", {
        examTaken: dataPerExamCategory?.id,
        item,
        examName,
      });
    }
  };
  if (dataPerExamCategoryLoading) return <PageLoader />;
  return (
    <div
      key={index}
      className="flex flex-col justify-center items-center self-stretch relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2] hover:bg-[#afc4cf]"
    >
      <div className="exam-category-container flex flex-col justify-center items-start flex-grow relative gap-2.5 w-[80%] w-full">
        <p className="text-xl font-semibold text-left text-[#222]">
          {category_name}
        </p>
        <div className="flex flex-col md:flex-row justify-start items-start self-stretch flex-col flex-shrink-0 relative gap-[50px]">
          <div className="flex flex-col justify-start items-start relative gap-2.5">
            <p className="w-[253px] text-[15px] text-left text-[#140d0d]">
              <span className="w-[253px] text-[15px] font-bold text-left text-[#140d0d]">
                Quiz items:
              </span>
              <span className="w-[253px] text-[15px] text-left text-[#140d0d]">
                {items_count}
              </span>
              <br />
              <span className="w-[253px] text-[15px] font-bold text-left text-[#140d0d]">
                Time limit:
              </span>
              <span className="w-[253px] text-[15px] text-left text-[#140d0d]">
                {time_limit}
              </span>
              <br />
              <span className="w-[253px] text-[15px] font-bold text-left text-[#140d0d]">
                Per Item:
              </span>
              <span className="w-[253px] text-[15px] text-left text-[#140d0d]">
                {time_limit_per_item}
              </span>
            </p>
            <p className="text-[11px] font-bold text-left text-[#140d0d]">
              Date added: {dayjs(created_at).format("MMMM D, YYYY")}
            </p>
          </div>
          <p className="flex-grow text-[15px] text-left text-[#140d0d]">
            <span className="flex-grow text-[15px] font-bold text-left text-[#140d0d]">
              Description:
            </span>
            <span
              className="flex-grow text-[15px] text-left text-[#140d0d] wrap"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
            />
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-1">
        {" "}
        <NextLink href={`/question/${slug}/show-question`}>
          <Button type="normal"> Random Questions </Button>
        </NextLink>{" "}
        <Button
          disabled={!exam_id}
          onClick={confirmCreateExamTaken}
          type="normal"
        >
          {" "}
          Take test{" "}
        </Button>
      </div>
    </div>
  );
};

export default ExamCategoryContainer;
