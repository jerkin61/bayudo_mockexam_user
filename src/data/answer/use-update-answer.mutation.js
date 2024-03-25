import { useMutation } from "react-query";
import { AnswerService } from "./answer.service";

export const useUpdateAnswerExamMutation = () => {
  return useMutation((payload) => AnswerService.updateAnswer(payload));
};
