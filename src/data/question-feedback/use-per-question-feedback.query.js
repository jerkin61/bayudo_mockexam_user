import http from "@utils/api/http";
import { useQuery } from "react-query";

export const fetchPerQuestionFeedbackByQuestionId = async (payload) => {
  const { id } = payload;
  const { data } = await http.get(`question-feedback-id/${id}`);
  return data;
};

export const usePerQuestionFeedbackQueryByQuestionId = (data) => {
  const { id } = data;
  return useQuery(["question-feedback", id], () =>
    fetchPerQuestionFeedbackByQuestionId(data)
  );
};
