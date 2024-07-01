import React, { useState } from "react";
import { useRouter } from "next/router";
import ExamCategory from "./ExamCategory";
import dayjs from "dayjs";
import { useUI } from "@contexts/ui.context";
import { useModalAction } from "@components/ui/modal/modal.context";
import Card from "../../common/card";
import ExamCategoryContainer from "./ExamCategoryContainer";
import { AnimatePresence, motion } from "framer-motion";
import { heightCollapse } from "../../ui/accordion";
import PageLoader from "../../ui/page-loader";

const ExamMainContainer = ({
  item,
  index,
  i,
  userId,
  setCloseOrOpen,
  closeOrOpen,
  loading,
}) => {
  const { isAuthorize } = useUI();
  const { openModal } = useModalAction();

  const {
    id,
    name,
    number_of_items,
    total_time_limit_hours,
    created_at,
    passing_rate,
    exam_category,
  } = item;

  const router = useRouter();
  function handleAuthModal() {
    return openModal("LOGIN_VIEW");
  }

  const [examCreated, setExamCreated] = React.useState(false);
  const isOpen = i === closeOrOpen;
  if (loading) return <PageLoader />;
  return (
    <div
      onClick={() => {
        if (!isAuthorize) {
          handleAuthModal();
        }
      }}
      key={name}
      className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5"
    >
      <div className="flex flex-col justify-center items-start self-stretch overflow-hidden gap-2.5 hover:bg-[#41b2f3]/50 bg-[#41b2f3]/25 border-[2px] p-5 md:p-8 bg-light shadow rounded">
        <div className="flex justify-center items-center self-stretch relative gap-2.5 px-2.5">
          <div
            className="flex flex-col justify-start items-center h-10 w-10 relative overflow-hidden gap-2.5 rounded-[20px] bg-[#d9d9d9] "
            title={"text-edit"}
            onClick={() => {
              isAuthorize && setCloseOrOpen(isOpen ? false : i);
            }}
          >
            {isOpen ? (
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
        </div>{" "}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="flex flex-col justify-start items-center self-stretch gap-2.5 pl-[50px] py-2.5"
              key={name}
              initial="from"
              animate="to"
              exit="from"
              variants={heightCollapse()}
            >
              <div className="flex justify-between items-center self-stretch relative">
                <p className="w-full h-[19px] text-base font-bold text-left text-black">
                  PLEASE SELECT CATEGORY
                </p>
              </div>
              {/* <ExamCategory
              userId={userId}
              examName={name}
              examListId={id}
              examCategory={exam_category}
              setExamCreated={setExamCreated}
              examCreated={examCreated}
            /> */}
              <div className="w-full flex flex-col gap-5">
                {" "}
                {!exam_category.length && (
                  <div className="flex justify-center items-center self-stretch relative gap-2.5 p-2.5 rounded-[5px] bg-[#e0ecf2]">
                    No category assigned
                  </div>
                )}
                {exam_category &&
                  exam_category.map((item, index) => (
                    <ExamCategoryContainer
                      userId={userId}
                      examName={name}
                      item={item}
                      index={index}
                      examListId={id}
                      setExamCreated={setExamCreated}
                      examCreated={examCreated}
                    />
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExamMainContainer;
