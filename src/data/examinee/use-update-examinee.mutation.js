import { useMutation } from "react-query";
import { AnswerService } from "./examinee.service";

export const useUpdateAnswerExamMutation = () => {
  return useMutation((data) => AnswerService.updateAnswer(data));
};
