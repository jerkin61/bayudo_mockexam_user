import { useMutation } from "react-query";
import { QuestionFeedbackService } from "./question-feedbackservice";

export const QuestionFeedbackExamMutation = () => {
  return useMutation((id, payload) =>
    QuestionFeedbackService.questionFeedback(id, payload)
  );
};
