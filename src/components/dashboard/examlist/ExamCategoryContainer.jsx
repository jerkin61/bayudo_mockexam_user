import NextLink from "next/link";
// import ActionButtons from "@components/common/ActionButton";
import { useRouter } from "next/router";
import React from "react";
import dayjs from "dayjs";

const ExamCategoryContainer = ({ item, index, examListId }) => {
  console.log("itemmmm", item);
  const {
    id,
    category_name,
    created_at,
    description,
    instruction,
    items_count,
    time_limit,
    time_limit_per_item,
  } = item;
  const router = useRouter();
  return (
    <NextLink href={`/question/${id}/show-question`}>
      <div
        key={index}
        class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2] hover:bg-[#afc4cf]"
      >
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="16" cy="16.5" r="16" fill="#D9D9D9"></circle>
        </svg>
        <div class="exam-category-container flex flex-col justify-center items-start flex-grow relative gap-2.5 w-[80%]">
          <p class="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#222]">
            {category_name}
          </p>
          <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[50px]">
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
            <p class="flex-grow w-[745px] text-[15px] text-left text-[#727272]">
              <span class="flex-grow w-[745px] text-[15px] font-bold text-left text-[#727272]">
                Description:
              </span>
              <span
                className="flex-grow w-[745px] text-[15px] text-left text-[#727272]"
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
      </div>
    </NextLink>
  );
};

export default ExamCategoryContainer;
