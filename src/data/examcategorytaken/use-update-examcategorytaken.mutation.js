import { useMutation } from "react-query";
import { ExamCategoryTakenService } from "./examcategory.service";

export const useUpdateExamCategoryTakenMutation = () => {
  return useMutation((data) =>
    ExamCategoryTakenService.updateExamCategoryTaken(data)
  );
};
