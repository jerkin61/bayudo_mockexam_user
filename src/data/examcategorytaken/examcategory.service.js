import { CoreApi } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { DateSchema } from "yup";

class ExamCategoryTaken extends CoreApi {
  createExamCategoryTaken(payload) {
    return this.http.post("examcategorytaken", payload).then((res) => res.data);
  }
  updateExamCategoryTaken(data) {
    const { id, payload } = data;
    return this.http
      .put(`examcategorytaken/${id}`, payload)
      .then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
}

export const ExamCategoryTakenService = new ExamCategoryTaken(
  "examcategorytaken"
);
