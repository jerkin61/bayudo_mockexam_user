import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { McLaren } from "next/font/google";
import { fadeInOut } from "@utils/motion/fade-in-out";
import { useUI } from "@contexts/ui.context";
import { Waypoint } from "react-waypoint";
import { useModalAction } from "../ui/modal/modal.context";
import { useRouter } from "next/router";

const mclaren = McLaren({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const topsectionContent = [
  {
    top_title: "Never stop",
    middle_title: "LEARNING",
    text_background_color: "#00f7df",
    bottom_title: "Build your confidence",
    public_link: "/homepage/young-beautiful-woman-with-smartphone.png",
    height: 500,
    width: 500,
  },
  {
    top_title: "Progress to the",
    middle_title: "TOP",
    text_background_color: "#eac503",
    bottom_title: "Take the challenge",
    public_link: "/homepage/women-celebrating-their-success-with-trophy.png",
    height: 1000,
    width: 450,
  },
];

const TopSection = () => {
  const { openModal } = useModalAction();
  const router = useRouter();
  const { showHeaderSearch, hideHeaderSearch, isAuthorize } = useUI();
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === "above") {
      showHeaderSearch();
    }
  };
  const [imageIndex, setImageIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Change the image index every minute
      setImageIndex((prevIndex) => (prevIndex + 1) % topsectionContent.length);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);
  const route = process.env.NEXT_PUBLIC_EXAM_ROUTE_URL;
  const proceedToAdminpage = () => {
    const isConfirmed = window.confirm(
      "You are about to be redirected to admin page?"
    );
    if (isConfirmed) router.push(route);
  };
  const handleRegisterOrLogin = () => {
    if (isAuthorize) {
      router.push("/main");
      return;
    }
    openModal("LOGIN_VIEW");
  };
  return (
    <div className="flex flex-col md:flex-row justify-start items-start h-full w-full gap-[39.66753005981445px] px-[10px] md:px-[100px] py-[36px] bg-[#f2f2f2] mt-[0] lg:mt-[5rem]">
      <div className="flex flex-col justify-center items-center gap-[36.21818161010742px] w-full md:w-[50%] lg:w-full">
        <div
          className={
            "flex flex-col justify-start items-start self-stretch gap-[8.623376846313477px]"
          }
        >
          <motion.div
            className="flex justify-center items-center self-stretch overflow-hidden gap-[17.246753692626953px] px-[17.246753692626953px] relative"
            key={topsectionContent[imageIndex].top_title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.51, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
              },
            }}
          >
            <div className="flex justify-center items-center flex-grow pt-[25px]">
              <p
                className={`tracking-wide text-stroke-2 flex-grow w-full text-[60px] text-center text-white stroke-[3px] ${mclaren.className}`}
              >
                {topsectionContent[imageIndex].top_title}
              </p>
            </div>
          </motion.div>
          <motion.div
            key={topsectionContent[imageIndex].middle_title}
            className="flex justify-center items-center self-stretch gap-[17.246753692626953px] relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.3,
              ease: [0, 0.51, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
              },
            }}
          >
            <div
              className="flex justify-center items-center gap-[17.246753692626953px] px-[17.246753692626953px]"
              style={{
                background: topsectionContent[imageIndex].text_background_color,
              }}
            >
              <p className="tracking-wide text-[55px] font-medium text-center text-[#dafffb] text-stroke-2">
                {topsectionContent[imageIndex].middle_title}
              </p>
            </div>
          </motion.div>
          <motion.div
            key={topsectionContent[imageIndex].bottom_title}
            className="flex justify-center items-center self-stretch overflow-hidden gap-[17.246753692626953px] px-[17.246753692626953px] py-[12.07272720336914px] relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.3,
              ease: [0, 0.51, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
              },
            }}
          >
            {" "}
            <p className="tracking-wide  flex-grow w-[573.45px] text-[41.392208099365234px] font-bold text-center text-[#00b5f4]">
              {topsectionContent[imageIndex].bottom_title}
            </p>
          </motion.div>
          {/* <div className="">
            <p className="tracking-wide  flex-grow w-[573.45px] text-[41.392208099365234px] font-bold text-center text-[#00b5f4]">
              Pass your exams
            </p>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center self-stretch gap-[34.493507385253906px] p-[17.246753692626953px]">
          <div className="flex justify-center items-center self-stretch overflow-hidden gap-[17.246753692626953px] p-[8.623376846313477px]">
            <p className="tracking-wide  flex-grow w-[556.21px] text-[20.696104049682617px] font-bold text-center text-[#023d37]">
              Subtitile will add lateer while development
            </p>
          </div>
          <div className="flex justify-start items-start gap-[10px] py-[15px] text">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.8 }}
              className="flex justify-center items-center w-[212.14px] h-[58.64px] gap-[17.246753692626953px] p-[8.623376846313477px] rounded-[34.49px] border-[3.45px] border-[#2d5af2]"
              onClick={handleRegisterOrLogin}
            >
              <p className="text-[15.522077560424805px] font-bold text-center text-[#2d5af2]">
                Login / Register as Student
              </p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.8 }}
              className="flex justify-center items-center w-[212.14px] h-[58.64px] overflow-hidden gap-[17.246753692626953px] p-[8.623376846313477px] rounded-[34.49px] bg-[#2d5af2] border-[3.45px] border-[#2d5af2] opacity-[1] hover:opacity-[0.8]"
              onClick={proceedToAdminpage}
            >
              <p className="text-[15.522077560424805px] font-bold text-center text-white">
                Proceed as Mentor
              </p>
            </motion.button>
          </div>
        </div>{" "}
      </div>
      <div className="relative flex hidden md:block justify-start items-start self-stretch flex-grow gap-[17.246753692626953px] rounded-[34.49px] w-full h-full overflow-hidden">
        <motion.div
          key={imageIndex}
          initial="from"
          animate="to"
          exit="from"
          variants={fadeInOut(1.5)}
          className="flex justify-center items-end flex-grow h-[600.04px] flex-col relative"
        >
          <Image
            alt={"homepage-woman"}
            src={topsectionContent[imageIndex]?.public_link}
            className="flex-grow h-[776.1px] z-[99]"
            height={topsectionContent[imageIndex]?.height}
            width={topsectionContent[imageIndex]?.width}
            style={{ objectFit: "cover", zIndex: 5 }}
          />
        </motion.div>
        {/* <motion.div
          initial="from"
          animate="to"
          exit="from"
          variants={fadeInOut(5)}
          className={"absolute z-[0]"}
        >
          <svg
            width="510"
            height="449"
            viewBox="0 0 510 449"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 right-0 absolute h-[70%] w-[80%] bottom-0 z-[0]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="286.436"
              cy="286.836"
              r="286.296"
              fill="#00B5F4"
            ></circle>
          </svg>{" "}
        </motion.div>{" "} */}
      </div>{" "}
      <Waypoint
        onLeave={showHeaderSearch}
        onEnter={hideHeaderSearch}
        onPositionChange={onWaypointPositionChange}
      />
    </div>
  );
};

export default TopSection;
