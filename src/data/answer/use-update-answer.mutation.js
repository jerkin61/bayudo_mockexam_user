import { useMutation } from "react-query";
import { AnswerService } from "./answer.service";

export const useUpdateAnswerExamMutation = () => {
  return useMutation((data) => AnswerService.updateAnswer(data));
};
