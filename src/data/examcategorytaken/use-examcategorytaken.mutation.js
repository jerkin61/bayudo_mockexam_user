import { useMutation } from "react-query";
import { ExamCategoryTakenService } from "./examcategory.service";

export const useExamCategoryTakenMutation = () => {
  return useMutation((id, payload) =>
    ExamCategoryTakenService.createExamCategoryTaken(id, payload)
  );
};
