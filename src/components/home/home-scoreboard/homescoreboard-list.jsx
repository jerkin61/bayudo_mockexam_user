import React from "react";
import { Reorder } from "framer-motion";

export const Item = ({ item, key }) => {
  return (
    <Reorder.Item
      className="flex justify-start items-center self-stretch flex-grow relative overflow-hidden px-[12.360593795776367px] py-[1.426222324371338px] rounded-[9.09px] bg-[white]/90"
      id={item.user}
    >
      {" "}
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[282.14px] h-[35.44px] absolute left-0 top-[1.36px] gap-[4.543269157409668px] p-[4.543269157409668px] bg-[white]"></div>
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.543269157409668px] p-[4.543269157409668px]">
        {/* <p class="flex-grow-0 flex-shrink-0 w-[10.64px] h-[26.25px] text-[21.564817428588867px] font-bold text-center text-[#2d5af2]">
          1
        </p> */}
      </div>
      <div class="flex justify-center items-center flex-grow relative gap-[4.543269157409668px] px-[3.180288553237915px]">
        <p class="flex-grow-0 flex-shrink-0 text-[14.538461685180664px] font-bold text-center text-black">
          {item.user}
        </p>
      </div>
      {/* </div> */}
      {/* // <span>{item.user}</span> */}
    </Reorder.Item>
  );
};
const HomeScoreBoardList = ({ data }) => {
  const items = data || [];
  return (
    <Reorder.Group
      className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-[4.543269157409668px] px-[14.992788314819336px] py-[4.543269157409668px]"
      axis="y"
      values={items}
    >
      {items?.map((item) => {
        const { user, exam_category_taken } = item;
        return (
          <Item
            key={user}
            exam_category_taken={exam_category_taken}
            item={item}
          />
        );
      })}
    </Reorder.Group>
  );
};

export default HomeScoreBoardList;
