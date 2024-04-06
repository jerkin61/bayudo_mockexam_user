import { CoreApi } from "@utils/api/core.api";

class QuestionFeedback extends CoreApi {
  questionFeedback(payload) {
    return this.http.post("question-feedback", payload).then((res) => res.data);
  }
  updateQuestionFeedback(data) {
    console.log("dataa", data);
    const { id, payload } = data;
    return this.http
      .put(`question-feedback/${id}`, payload)
      .then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
}

export const QuestionFeedbackService = new QuestionFeedback(
  "question-feedback"
);
