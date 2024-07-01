import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment, useRef } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import { useQuestionQuery } from "@data/question/use-question.query";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Waypoint } from "react-waypoint";
import PerMainQuestion from "./per-main-question";
// import { Waypoint } from "react-scroll";
import { useUpdateExamCategoryTakenMutation } from "@data/examcategorytaken/use-update-examcategorytaken.mutation";
import PageLoader from "../../ui/page-loader";
import { usePerExamCategoryTaken } from "@data/examcategorytaken/use-per-examcategorytaken.query";
const QuestionList = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const limit = 1;
  const [triggered, setTriggered] = React.useState(false);
  const [currPage, setCurrPage] = React.useState(1);

  const checkCompleted =
    !router?.query.completed === "true" ||
    router?.query.completed === undefined;

  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error,
    lastPage: questionLastPage,
  } = useQuestionQuery(
    {
      // type: "bakery",
      limit,
      questionId: router?.query.questionId,
      // random: 1,
      // text: query?.text,
      // category: query?.category ,
    },
    {
      onSuccess: (data) => {
        console.log(data);
        if (data.pages.length === 1) fetchNextPage();
      },
    }
  );
  const { data: dataPerExamCategory, isLoading: dataPerExamCategoryLoading } =
    usePerExamCategoryTaken({ id: router?.query.exam_category_id });
  // const { data: dataPerExamCategory, isLoading: dataPerExamCategoryLoading } =
  //   usePerExamCategoryTaken({ id: router?.query.questionId });
  const [locked, setLocked] = React.useState(false);

  const {
    mutateAsync: updateExamCategory,
    isLoading: updateExamCategoryLoading,
  } = useUpdateExamCategoryTakenMutation();
  console.log("dataPerExamCategory", dataPerExamCategory, "here");
  React.useEffect(() => {
    if (dataPerExamCategory)
      dataPerExamCategory.completed === 1 && setLocked(true);
  }, [dataPerExamCategory]);
  const completeExam = async () => {
    await updateExamCategory(
      {
        exam_category_id: router?.question_id,
        id: router?.query.exam_category_id,
        payload: { completed: 1 },
      },
      {
        onSuccess: () => {
          setLocked(true);
          router.push("/my-exams");
        },
        onError: () => {
          toast.error("Error update exam category taken.");
        },
      }
    );
  };

  const completeExamPerItem = async () => {
    await updateExamCategory({
      exam_category_id: router?.question_id,
      id: router?.query.exam_category_id,
    });
  };

  if (isError && error) return <dvi>Error</dvi>;
  function handleLoadMore() {
    if (!triggered) {
      // fetchNextPage();
      setTriggered(true);
    }
  }
  const moreDataAvailable = currPage !== data?.pages + 1 && hasNextPage;

  const scrollToNextElement = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;
    const scrollDistance = scrollContainer.clientHeight;
    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth",
    });
    if (moreDataAvailable) {
      fetchNextPage();
      completeExamPerItem();
      setCurrPage(currPage + 1);
    }
  };

  const previousPageScroll = () => {
    setCurrPage(currPage - 1);
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;
    const scrollDistance = -scrollContainer.clientHeight;
    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth",
    });
  };
  if (loading && dataPerExamCategoryLoading && !data?.pages?.length)
    return <PageLoader />;

  return (
    <div
      className="App bg-[#071B24] h-[100vh] overflow-hidden"
      id="scroll-container"
    >
      {data?.pages?.map((questions, pageIndex) => (
        <Fragment key={pageIndex}>
          {" "}
          {data?.pages[0]?.data.length === 0 && (
            <div className="p-10">
              <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[5px] bg-white">
                <p className="flex-grow w-[323px] text-base font-semibold text-center text-black">
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
                {/* {hasNextPage && (
                  <Waypoint onEnter={handleLoadMore} fireOnRapidScroll />
                )} */}
                <PerMainQuestion
                  updateExamCategoryLoading={updateExamCategoryLoading}
                  checkCompleted={checkCompleted}
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
                  questionLastPage={questionLastPage}
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
