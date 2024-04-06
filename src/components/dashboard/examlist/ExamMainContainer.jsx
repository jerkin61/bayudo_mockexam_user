import React, { useState } from "react";
import { useRouter } from "next/router";
import ExamCategory from "./ExamCategory";
import dayjs from "dayjs";
import { useUI } from "@contexts/ui.context";
import { useModalAction } from "@components/ui/modal/modal.context";

const ExamMainContainer = ({ item, index }) => {
  const { openSidebar, setSidebarView, toggleMobileSearch, isAuthorize } =
    useUI();
  const { openModal } = useModalAction();
  const [closeOrOpen, setCloseOrOpen] = useState(false);
  const {
    id,
    name,
    number_of_items,
    total_time_limit_hours,
    created_at,
    passing_rate,
    exam_category,
  } = item;

  console.log("ExamMainContainer", item);
  const router = useRouter();
  function handleAuthModal() {
    return openModal("LOGIN_VIEW");
  }

  return (
    <div
      onClick={() => {
        if (!isAuthorize) {
          handleAuthModal();
        }
      }}
      key={index}
      className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5"
    >
      <div className="flex flex-col justify-center items-start self-stretch overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white hover:bg-[#41b2f3]/50 border-[2px]">
        <div className="flex justify-center items-center self-stretch relative gap-2.5 px-2.5">
          <div
            className="flex flex-col justify-start items-center h-10 w-10 relative overflow-hidden gap-2.5 rounded-[20px] bg-[#d9d9d9] "
            title={"text-edit"}
            onClick={() => {
              isAuthorize && setCloseOrOpen(!closeOrOpen);
            }}
          >
            {closeOrOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 absolute left-2 top-2"
                preserveAspectRatio="none"
              >
                <path d="M19 12.998H5V10.998H19V12.998Z" fill="#14130A"></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 absolute left-2 top-2"
                preserveAspectRatio="none"
              >
                <path
                  d="M19 13.498H13V19.498H11V13.498H5V11.498H11V5.49805H13V11.498H19V13.498Z"
                  fill="#14130A"
                ></path>
              </svg>
            )}{" "}
          </div>
          <div className="flex flex-col justify-center items-start flex-grow relative gap-2.5">
            <p className="text-xl font-semibold text-left text-[#222]">
              {name}
            </p>
            <p className="text-[15px] text-left text-[#140d0d]">
              <span className="text-[15px] text-left text-[#140d0d]">
                Quiz items: {number_of_items}
              </span>
              <br />
              <span className="text-[15px] text-left text-[#140d0d]">
                Time limit: {total_time_limit_hours}
              </span>
              <br />
              <span className="text-[15px] text-left text-[#140d0d]">
                Categories : 5
              </span>{" "}
              <br />
              <span className="text-[15px] text-left text-[#140d0d]">
                Passing Rate : {passing_rate}
              </span>
            </p>
            <p className="text-[11px] font-bold text-left text-[#140d0d]">
              Date added: {dayjs(created_at).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
        {closeOrOpen && (
          <div className="flex flex-col justify-start items-center self-stretch gap-2.5 pl-[50px] py-2.5">
            <div className="flex justify-between items-center self-stretch relative">
              <p className="w-full h-[19px] text-base font-bold text-left text-black">
                PLEASE SELECT CATEGORY
              </p>
            </div>
            <ExamCategory
              examName={name}
              examListId={id}
              examCategory={exam_category}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamMainContainer;
