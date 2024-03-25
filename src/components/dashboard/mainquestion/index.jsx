import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment, useRef } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import Button from "@components/ui/button";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useQuestionQuery } from "@data/question/use-question.query";

import { useTranslation } from "react-i18next";
import { Waypoint } from "react-waypoint";
import PerMainQuestion from "./per-main-question";
// import { Waypoint } from "react-scroll";

const QuestionList = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const limit = 1;
  const [triggered, setTriggered] = React.useState(false);
  const [currPage, setCurrPage] = React.useState(1);
  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error,
  } = useQuestionQuery({
    // type: "bakery",
    limit,
    questionId: router?.query.questionId,
    // text: query?.text,
    // category: query?.category ,
  });
  console.log("daaaaaa", data?.pages + 1);
  if (isError && error) return <dvi>Error</dvi>;
  function handleLoadMore() {
    if (!triggered) {
      fetchNextPage();
      setTriggered(true);
    }
  }
  console.log("hasNextPage", hasNextPage);
  const scrollToNextElement = () => {
    setCurrPage(currPage + 1);
    if (currPage !== data?.pages + 1) hasNextPage && fetchNextPage();
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return; // If element not found, exit the function

    // Calculate the distance to scroll
    const scrollDistance = scrollContainer.clientHeight;

    // Scroll the element by the calculated distance
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

    // Scroll the element by the calculated distance
    scrollContainer.scrollBy({
      top: scrollDistance,
      behavior: "smooth", // Optional: smooth scrolling effect
    });
  };
  const videoRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // const videoElement = entry.target;
          // videoElement.play();
        } else {
          const videoElement = entry.target;
          // videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [data]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };
  if (loading && !data?.pages?.length) return <div>Loader</div>;

  return (
    <div
      className="App bg-[#2e2f30] h-[100vh] overflow-hidden"
      id="scroll-container"
    >
      {data?.pages?.map((questions, pageIndex) => (
        <Fragment key={pageIndex}>
          {" "}
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
                  isFirst={`${pageIndex}-${questionIndex}`}
                  previousPageScroll={previousPageScroll}
                  nextPageScroll={scrollToNextElement}
                  key={`question-${pageIndex}-${questionIndex}`}
                  question={question}
                  questionNumber={questionNumber}
                  setVideoRef={handleVideoRef(pageIndex, questionIndex)}
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
