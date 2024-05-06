import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerExamCategoryTaken = async (payload) => {
  const { id, completed } = payload;
  const { data } = await http.get(`examcategorytaken/${id}`);
  return data;
};

export const usePerExamCategoryTaken = (payload) => {
  return useQuery(["examcategorytaken", payload], () =>
    fetchPerExamCategoryTaken(payload)
  );
};
export const fetchPerExamCategoryTakenByExamCategoryId = async (payload) => {
  const { id, completed = "" } = payload;
  const { data } = await http.get(
    `examcategorytakenbyexamcategoryid/${id}?completed=${completed}`
  );
  return data;
};

export const usePerExamCategoryTakenByExamCategoryId = (payload) => {
  return useQuery(["examcategorytaken", payload], () =>
    fetchPerExamCategoryTakenByExamCategoryId(payload)
  );
};
