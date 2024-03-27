import http from "@utils/api/http";
import { useQuery } from "react-query";
import { CoreApi } from "@utils/api/core.api";

const ExamineeService = new CoreApi("me");
export const fetchMe = async () => {
  const { data } = await ExamineeService.findAll();
  return { me: data };
};

export const usePerExaminee = () => {
  return useQuery("me", fetchMe);
};
