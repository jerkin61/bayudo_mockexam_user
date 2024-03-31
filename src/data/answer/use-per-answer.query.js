import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerAnswer = async (payload) => {
  const { id, examCategoryTaken } = payload;
  const { data } = await http.get(`answerexams/${id}/${examCategoryTaken}`);
  return data;
};

export const usePerAnswerQuery = (data) => {
  const { id } = data;
  return useQuery(["answerexams", id], () => fetchPerAnswer(data));
};
