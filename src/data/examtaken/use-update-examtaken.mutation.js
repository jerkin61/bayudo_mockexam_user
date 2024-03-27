import { useMutation } from "react-query";
import { ExamTakenService } from "./examtaken.service";

export const useUpdateExamTakenMutation = () => {
  return useMutation((data) => ExamTakenService.updateExamTaken(data));
};
