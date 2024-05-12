import React from "react";
import HomeScoreboard from "./home-scoreboard";

const FeatureScoreboard = () => {
  return (
    <div class="w-full self-center xl:self-stretch flex justify-start items-start  gap-2.5 md:px-[10px] md:px-[100px] py-[10px] md:py-[50px] bg-white">
      <div class="flex flex-col xl:flex-row justify-center items-center gap-[30px] md:gap-[100px] px-[10px] md:px-[120px]">
        <div class="flex flex-col justify-start items-start  w-[576px] relative">
          <svg
            width="572"
            height="394"
            viewBox="0 0 572 394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            preserveAspectRatio="none"
          >
            <path
              d="M3.21053e-05 0.739309L571.572 0.739258V393.132H3.21053e-05V0.739309Z"
              fill="#CFEDFF"
            ></path>
          </svg>
          <HomeScoreboard />
        </div>
        <div class="md:w-full flex flex-col justify-start items-start relative gap-[20px] md:gap-[40px]">
          <p class="self-stretch  w-full text-[50px] text-left text-[#192430]">
            Real-time scoreboard
          </p>
          <p class="self-stretch  w-full h-[50px] text-base text-left text-[#727272]">
            Create documentation for the collaborators (i.e. designers or devs)
            directly in your design file.
          </p>
          <div class="flex justify-start items-start self-stretch  relative gap-[30px]">
            <svg
              width="180"
              height="179"
              viewBox="0 0 180 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=" w-[60px] h-[58px]"
              preserveAspectRatio="none"
            >
              <g filter="url(#filter0_d_1063_750)">
                <ellipse
                  cx="90"
                  cy="61.4492"
                  rx="30"
                  ry="29"
                  fill="white"
                ></ellipse>
              </g>
              <path
                d="M91 60.4492C91 59.3446 91.8954 58.4492 93 58.4492H101C102.105 58.4492 103 59.3446 103 60.4492V75.4492C103 76.5538 102.105 77.4492 101 77.4492H93C91.8954 77.4492 91 76.5538 91 75.4492V60.4492Z"
                fill="url(#paint0_linear_1063_750)"
              ></path>
              <path
                d="M73 50.4492C73 49.3446 73.8954 48.4492 75 48.4492H92.9111C94.0157 48.4492 94.9111 49.3446 94.9111 50.4492V75.4573C94.9111 76.5574 94.0193 77.4492 92.9192 77.4492C81.9181 77.4492 73 68.5311 73 57.53V50.4492Z"
                fill="url(#paint1_linear_1063_750)"
              ></path>
              <path
                d="M80 54.4492C80 53.8969 80.4477 53.4492 81 53.4492H90C90.5523 53.4492 91 53.8969 91 54.4492C91 55.0015 90.5523 55.4492 90 55.4492H81C80.4477 55.4492 80 55.0015 80 54.4492Z"
                fill="white"
              ></path>
              <path
                d="M80 60.4492C80 59.8969 80.4477 59.4492 81 59.4492H90C90.5523 59.4492 91 59.8969 91 60.4492C91 61.0015 90.5523 61.4492 90 61.4492H81C80.4477 61.4492 80 61.0015 80 60.4492Z"
                fill="white"
              ></path>
              <path
                d="M80 66.4492C80 65.8969 80.4477 65.4492 81 65.4492H90C90.5523 65.4492 91 65.8969 91 66.4492C91 67.0015 90.5523 67.4492 90 67.4492H81C80.4477 67.4492 80 67.0015 80 66.4492Z"
                fill="white"
              ></path>
              <defs>
                <filter
                  id="filter0_d_1063_750"
                  x="0"
                  y="0.449219"
                  width="180"
                  height="178"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="28"></feOffset>
                  <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.15 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1063_750"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1063_750"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_1063_750"
                  x1="97"
                  y1="58.4492"
                  x2="97"
                  y2="77.4492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF8989"></stop>
                  <stop offset="1" stop-color="#FF6969"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1063_750"
                  x1="83.9556"
                  y1="48.4492"
                  x2="83.9556"
                  y2="77.4492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4647FF"></stop>
                  <stop offset="1" stop-color="#9899FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div class="flex flex-col justify-start items-start flex-grow relative gap-[9px]">
              <p class=" w-[92px] h-[27px] text-xl font-semibold text-left text-[#222]">
                Strategic
              </p>
              <p class="self-stretch  w-full text-[15px] text-left text-[#727272]">
                <span class="self-stretch   w-full text-[15px] text-left text-[#727272]">
                  Suggests that the component spacing
                </span>
                <br />
                <span class="self-stretch  w-full text-[15px] text-left text-[#727272]">
                  between cards and elements.
                </span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start self-stretch  relative gap-[30px]">
            <svg
              width="180"
              height="178"
              viewBox="0 0 180 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=" w-[60px] h-[57px]"
              preserveAspectRatio="none"
            >
              <g filter="url(#filter0_d_1063_761)">
                <ellipse
                  cx="90"
                  cy="60.9492"
                  rx="30"
                  ry="28.5"
                  fill="white"
                ></ellipse>
              </g>
              <rect
                x="77"
                y="50.4492"
                width="25"
                height="25"
                rx="2"
                fill="url(#paint0_linear_1063_761)"
              ></rect>
              <path
                d="M102 58.4492V52.2387C102 51.1341 101.105 50.2387 100 50.2387H98.9512V47.4492C98.9512 46.8969 98.5035 46.4492 97.9512 46.4492H97.5122C96.9599 46.4492 96.5122 46.8969 96.5122 47.4492V50.2387H82.4878V47.4492C82.4878 46.8969 82.0401 46.4492 81.4878 46.4492H81.0488C80.4965 46.4492 80.0488 46.8969 80.0488 47.4492V50.2387H79C77.8954 50.2387 77 51.1341 77 52.2387V58.4492H102Z"
                fill="url(#paint1_linear_1063_761)"
              ></path>
              <rect x="81" y="61.4492" width="3" height="3" fill="white"></rect>
              <rect x="81" y="68.4492" width="3" height="3" fill="white"></rect>
              <rect x="88" y="61.4492" width="3" height="3" fill="white"></rect>
              <rect x="88" y="68.4492" width="3" height="3" fill="white"></rect>
              <rect x="95" y="61.4492" width="3" height="3" fill="white"></rect>
              <rect x="95" y="68.4492" width="3" height="3" fill="white"></rect>
              <defs>
                <filter
                  id="filter0_d_1063_761"
                  x="0"
                  y="0.449219"
                  width="180"
                  height="177"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="28"></feOffset>
                  <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.15 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1063_761"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1063_761"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_1063_761"
                  x1="77"
                  y1="57.9492"
                  x2="102"
                  y2="77.4492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8889FF"></stop>
                  <stop offset="1" stop-color="#3C3DFF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1063_761"
                  x1="77"
                  y1="46.4492"
                  x2="102"
                  y2="58.4492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFA7A7"></stop>
                  <stop offset="1" stop-color="#FF6C6C"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div class="flex flex-col justify-start items-start flex-grow relative gap-2.5">
              <p class=" w-[159px] h-[27px] text-xl font-semibold text-left text-[#222]">
                Work schedule
              </p>
              <p class="self-stretch  w-full text-[15px] text-left text-[#727272]">
                work schedule is the time an employee is expected to be on the
                job
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScoreboard;
