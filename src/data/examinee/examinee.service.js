import { CoreApi } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { DateSchema } from "yup";

class Examinee extends CoreApi {
  answer(payload) {
    return this.http.post("answerexams", payload).then((res) => res.data);
  }
  updateExaminee(data) {
    console.log("dataa", data);
    const { id, payload } = data;
    return this.http.put(`user/${id}`, payload).then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
}

export const AnswerService = new Examinee("examinee");
