import React, { useEffect, useState } from "react";
import HomeScoreBoardList from "./homescoreboard-list";

const items = [
  {
    user: "John Doe",
    exam_category_taken: "Mathematics",
  },
  {
    user: "Alice Smith",
    exam_category_taken: "Science",
  },
  {
    user: "Bob Johnson",
    exam_category_taken: "History",
  },
  {
    user: "Emily Brown",
    exam_category_taken: "English",
  },
  {
    user: "Michael Lee",
    exam_category_taken: "Physics",
  },
  {
    user: "Sophia Garcia",
    exam_category_taken: "Chemistry",
  },
  {
    user: "David Martinez",
    exam_category_taken: "Geography",
  },
];
const HomeScoreboard = () => {
  const [shuffledItems, setShuffledItems] = React.useState(items);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShuffledItems(shuffleArray([...items]));
    }, 5000); // 10 seconds in milliseconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[378px] w-[581.54px] overflow-hidden gap-[9.540865898132324px] px-[90.86538696289062px] py-[25.44230842590332px] bg-cover bg-no-repeat bg-center absolute">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow relative gap-[9.540865898132324px] p-[4.543269157409668px] rounded-[9.09px] bg-[#35a5e3]">
        <p className="flex-grow-0 flex-shrink-0 w-[247.61px] h-[22.26px] text-[21.807693481445312px] font-bold text-center text-white">
          SCORE BOARD
        </p>{" "}
        <HomeScoreBoardList data={shuffledItems} />
        <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-[4.543269157409668px] px-[14.992788314819336px] py-[4.543269157409668px]"></div>
      </div>
    </div>
  );
};

export default HomeScoreboard;
