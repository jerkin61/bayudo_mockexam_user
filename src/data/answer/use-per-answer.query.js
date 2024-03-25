import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerAnswer = async (id) => {
  const { data } = await http.get(`answerexams/${id}`);
  return data;
};

export const usePerAnswerQuery = (id) => {
  return useQuery(["answerexams", id], () => fetchPerAnswer(id));
};
