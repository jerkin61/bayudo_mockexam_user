import { QueryClient, useMutation } from "react-query";
import { ExamTakenService } from "./examtaken.service";

export const useExamTakenMutation = () => {
  const queryClient = new QueryClient();
  return useMutation((id, payload) =>
    ExamTakenService.createExamTaken(id, payload)
  );
};
