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
  animateScroll,
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
  const page = 1;
  const searchTerm = "";
  // const {
  //   data,
  //   isLoading: loading,
  //   error,
  // } = useQuestionQuery({
  //   limit: 20,
  //   page,
  //   text: searchTerm,
  //   questionId: router?.query.questionId,
  // });

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
    <div className="App bg-[#2e2f30] h-[100vh]" id="scroll-container">
      {data?.pages?.map((questions, _idx) => (
        <Fragment key={_idx}>
          {" "}
          {questions?.data?.map((question) => (
            <Element className="element" name={`element${_idx + 1}`} key={_idx}>
              <PerRandomQuestion
                question={question}
                setVideoRef={handleVideoRef(_idx)}
              />{" "}
            </Element>
          ))}{" "}
        </Fragment>
      ))}

      {hasNextPage && <Waypoint onEnter={handleLoadMore} />}
    </div>
  );
};
export default QuestionList;
