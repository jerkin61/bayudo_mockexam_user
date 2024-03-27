import { useMutation } from "react-query";
import { AnswerService } from "./examinee.service";

export const useAnswerExamMutation = () => {
  return useMutation((id, payload) => AnswerService.answer(id, payload));
};
