import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment, useRef } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import Button from "@components/ui/button";
import { Element, animateScroll as scroll } from "react-scroll";
import { useQuestionQuery } from "@data/question/use-question.query";
import { useTranslation } from "react-i18next";
import { Waypoint } from "react-waypoint";
import PerRandomQuestion from "./per-random-question";
import PageLoader from "../../ui/page-loader";

import { permissions } from "../../../contexts/ui.context";

const QuestionList = () => {
  // const { permissions, token } = getAuthCredentials();

  const { t } = useTranslation();
  const router = useRouter();

  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error,
  } = useQuestionQuery(
    {
      limit: 1,
      questionId: router?.query.questionId,
      random: 1,
    },
    { onError: () => fetchNextPage() }
  );
  if (isError && error) return <dvi>Error</dvi>;
  function handleLoadMore() {
    fetchNextPage();
  }
  const scrollToNextElement = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const scrollDistance = scrollContainer.clientHeight;

    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth",
    });
  };
  const videoRefs = useRef([]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        } else {
          const videoElement = entry.target;
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    return () => {
      observer.disconnect();
    };
  }, [data]);

  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };
  if (loading && !data?.pages?.length) return <PageLoader />;

  return (
    <div
      className="App bg-[#071B24] h-[100vh] overflow-hidden"
      id="scroll-container"
    >
      {data?.pages?.map((questions, pageIndex) => (
        <Fragment key={pageIndex}>
          {" "}
          {questions?.data?.map((question, questionIndex) => (
            <Element
              className="element"
              name={`element${pageIndex + 1}-${questionIndex + 1}`}
              key={`element-${pageIndex}-${questionIndex}`}
            >
              {" "}
              {/* {hasNextPage && <Waypoint onEnter={handleLoadMore} />} */}
              <PerRandomQuestion
                loadingMore={loadingMore}
                handleLoadMore={handleLoadMore}
                nextPageScroll={scrollToNextElement}
                key={`question-${pageIndex}-${questionIndex}`}
                question={question}
                setVideoRef={handleVideoRef(pageIndex, questionIndex)}
              />{" "}
            </Element>
          ))}{" "}
        </Fragment>
      ))}
    </div>
  );
};
export default QuestionList;
