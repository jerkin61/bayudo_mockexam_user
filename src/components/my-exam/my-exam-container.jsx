import React from "react";
import Button from "../ui/button";
import { useExamTakenQuery } from "@data/examtaken/use-examtaken.query";
import MyExamTakenContainer from "./my-exam-taken-container";
import { useRouter } from "next/router";
import PageLoader from "../ui/page-loader";
import Card from "../common/card";

const MyExamContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { data, loading } = useExamTakenQuery({
    limit: 20,
    page,
    text: searchTerm,
    completed: true,
  });
  const { query } = useRouter();

  if (loading) return <PageLoader />;
  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#f1f9ff]">
      <div className="flex flex-col justify-start items-center self-stretch gap-[15px]">
        <div className="flex flex-col justify-start items-center self-stretch h-[598px] gap-[15px]">
          <Card className="flex flex-col md:flex-row items-center mt-4 md:mt-8\">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h1 className="text-lg font-semibold text-heading">My Exams</h1>
            </div>

            {/* {superAdmin && (
          <div className="w-full md:w-3/4 flex items-center ms-auto">
            <LinkButton
              href={`group/create`}
              className="h-12 ms-4 md:ms-6 bg-[green]"
            >
              <span className="hidden md:block">+ {"Add Group"}</span>
              <span className="md:hidden">+ {"form:button-label-add"}</span>
            </LinkButton>
          </div>
        )} */}
          </Card>

          <div className="flex flex-col justify-start items-center self-stretch gap-[15px] py-2.5">
            {data?.data?.map((data) => (
              <MyExamTakenContainer data={data} />
            ))}{" "}
            {!data?.data.length && (
              <Card>You haven't started an exam yet.</Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExamContainer;
