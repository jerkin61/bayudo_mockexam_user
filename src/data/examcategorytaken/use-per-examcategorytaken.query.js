import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerExamCategoryTaken = async (id) => {
  const { data } = await http.get(`examcategorytaken/${id}`);
  return data;
};

export const usePerExamCategoryTaken = (id) => {
  return useQuery(["examcategorytaken", id], () =>
    fetchPerExamCategoryTaken(id)
  );
};
