import { useMutation } from "react-query";
import { AnswerService } from "./answer.service";

export const useAnswerExamMutation = () => {
  return useMutation((id, payload) => AnswerService.answer(id, payload));
};
