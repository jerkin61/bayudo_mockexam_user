import { useMutation } from "react-query";
import { QuestionFeedbackService } from "./question-feedbackservice";

export const useUpdateQuestionFeedbackExamMutation = () => {
  return useMutation((data) =>
    QuestionFeedbackService.updateQuestionFeedback(data)
  );
};
