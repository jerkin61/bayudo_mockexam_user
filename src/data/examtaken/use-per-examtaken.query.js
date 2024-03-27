import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerExamTaken = async (id) => {
  const { data } = await http.get(`examtaken/${id}`);
  return data;
};

export const usePerExamTaken = (id) => {
  return useQuery(["examtaken", id], () => fetchPerExamTaken(id));
};
