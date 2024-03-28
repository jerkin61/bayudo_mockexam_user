import React from "react";

const PageLoader = () => {
  return (
    <div
      className={
        "w-full h-screen flex flex-col items-center justify-center bg-[#224552]"
      }
    >
      <div className="flex relative "></div>
      <div className="loader -mt-20"></div>;
    </div>
  );
};

export default PageLoader;
