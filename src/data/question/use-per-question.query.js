import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerQuestion = async (id) => {
  const question = new Question();
  const { data } = await http.get(`question/${id}`);
  return data;
};

export const usePerQuestionQuery = (id) => {
  return useQuery(["question", id], () => fetchPerQuestion(id));
};
