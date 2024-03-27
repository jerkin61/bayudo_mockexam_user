import { useMutation } from "react-query";
import { ExamTakenService } from "./examtaken.service";

export const useExamTakenMutation = () => {
  return useMutation((id, payload) =>
    ExamTakenService.createExamTaken(id, payload)
  );
};
