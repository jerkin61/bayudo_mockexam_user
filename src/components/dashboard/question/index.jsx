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
import PerRandomQuestion from "./per-random-question";
// import { Waypoint } from "react-scroll";

const QuestionList = () => {
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
  } = useQuestionQuery({
    // type: "bakery",
    limit: 20,
    questionId: router?.query.questionId,
    // text: query?.text,
    // category: query?.category ,
  });
  if (isError && error) return <dvi>Error</dvi>;
  function handleLoadMore() {
    fetchNextPage();
  }
  const scrollToNextElement = () => {
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
          {questions?.data?.map((question, questionIndex) => (
            <Element
              className="element"
              name={`element${pageIndex + 1}-${questionIndex + 1}`}
              key={`element-${pageIndex}-${questionIndex}`}
            >
              {" "}
              {hasNextPage && <Waypoint onEnter={handleLoadMore} />}
              <PerRandomQuestion
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
