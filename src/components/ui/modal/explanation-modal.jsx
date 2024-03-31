const ExplanationModal = ({ data }) => {
  const { explanation } = data;
  return (
    <div className="py-6 px-5 sm:p-8  w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center bg-[#f1f9ff]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
        <div className="flex flex-col justify-between items-center self-stretch flex-grow">
          <div className="flex flex-col justify-start items-center self-stretch h-[598px] gap-[15px]">
            <div className="flex flex-col justify-center items-center self-stretch h-[66px] gap-2.5 px-5 py-2.5 bg-[#afc4cf]">
              <div className="flex justify-center items-center relative gap-2.5">
                <p className="text-[18px] font-bold text-left text-[#222223]">
                  {/* {examName}: {category_name} */}
                  Test
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5 h-[90%]">
              <div className="flex justify-start items-start self-stretch gap-2.5 px-5 rounded-[5px] bg-white overflow-scroll h-full w-full">
                <div className="flex flex-col justify-center items-start flex-grow relative gap-2.5">
                  <p className="self-stretch w-full text-xl font-semibold text-left text-[#222]">
                    Explanation
                  </p>

                  <div dangerouslySetInnerHTML={{ __html: explanation }} />

                  <p className="self-stretch w-full text-[11px] font-bold text-left text-[#727272]">
                    Date Finished: 7/24/2002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
