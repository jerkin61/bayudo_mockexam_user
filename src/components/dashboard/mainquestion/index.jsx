import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment, useRef } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import { useQuestionQuery } from "@data/question/use-question.query";

import { useTranslation } from "react-i18next";
import { Waypoint } from "react-waypoint";
import PerMainQuestion from "./per-main-question";
// import { Waypoint } from "react-scroll";
import { useUpdateExamCategoryTakenMutation } from "@data/examcategorytaken/use-update-examcategorytaken.mutation";

const QuestionList = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const limit = 1;
  const [triggered, setTriggered] = React.useState(false);
  const [currPage, setCurrPage] = React.useState(1);
  const [locked, setLocked] = React.useState(false);

  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error,
    lastPage: questionLastPage,
  } = useQuestionQuery({
    // type: "bakery",
    limit,
    questionId: router?.query.questionId,
    // text: query?.text,
    // category: query?.category ,
  });

  const {
    mutateAsync: updateExamCategory,
    isLoading: updateExamCategoryLoading,
  } = useUpdateExamCategoryTakenMutation();

  const completeExam = () => {
    setLocked(true);
    updateExamCategory({ id: router?.query.exam_category_id });
  };
  if (isError && error) return <dvi>Error</dvi>;
  function handleLoadMore() {
    if (!triggered) {
      fetchNextPage();
      setTriggered(true);
    }
  }
  const moreDataAvailable = currPage !== data?.pages + 1 && hasNextPage;

  const scrollToNextElement = () => {
    if (moreDataAvailable) {
      fetchNextPage();
      setCurrPage(currPage + 1);
    }
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return; // If element not found, exit the function

    // Calculate the distance to scroll
    const scrollDistance = scrollContainer.clientHeight;
    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth", // Optional: smooth scrolling effect
    });
  };

  const previousPageScroll = () => {
    setCurrPage(currPage - 1);
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return; // If element not found, exit the function

    // Calculate the distance to scroll
    const scrollDistance = -scrollContainer.clientHeight;

    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth",
    });
  };
  console.log("data", data);
  if (loading && !data?.pages?.length) return <div>Loader</div>;
  return (
    <div
      className="App bg-[#2e2f30] h-[100vh] overflow-hidden"
      id="scroll-container"
    >
      {data?.pages?.map((questions, pageIndex) => (
        <Fragment key={pageIndex}>
          {" "}
          {data?.pages[0]?.data.length === 0 && (
            <div className="p-10">
              <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
                <p class="flex-grow w-[323px] text-base font-semibold text-center text-black">
                  No data here.
                </p>
              </div>
            </div>
          )}
          {questions?.data?.map((question, questionIndex) => {
            const questionNumber = pageIndex * limit + questionIndex + 1;
            return (
              <Element
                className="element"
                name={`element${pageIndex + 1}-${questionIndex + 1}`}
                key={`element-${pageIndex}-${questionIndex}`}
              >
                {" "}
                {hasNextPage && (
                  <Waypoint onEnter={handleLoadMore} fireOnRapidScroll />
                )}
                <PerMainQuestion
                  examCategoryTaken={router?.query.exam_category_id}
                  isFirst={`${pageIndex}-${questionIndex}`}
                  previousPageScroll={previousPageScroll}
                  nextPageScroll={scrollToNextElement}
                  key={`question-${pageIndex}-${questionIndex}`}
                  question={question}
                  questionNumber={questionNumber}
                  loadingMore={loadingMore}
                  hasNextPage={hasNextPage}
                  lastPage={moreDataAvailable}
                  questionLastPage={data?.pages.length}
                  completeExam={completeExam}
                  locked={locked}
                />{" "}
              </Element>
            );
          })}{" "}
        </Fragment>
      ))}
    </div>
  );
};
export default QuestionList;
