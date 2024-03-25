import { CoreApi } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";

class Answer extends CoreApi {
  answer(payload) {
    return this.http.post("answerexams", payload).then((res) => res.data);
  }
  updateAnswer(id, payload) {
    console.log("id", id, payload);
    return this.http.put(`answerexams/${id}`, payload).then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
}

export const AnswerService = new Answer("answer");
