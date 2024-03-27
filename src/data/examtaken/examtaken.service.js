import { CoreApi } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { DateSchema } from "yup";

class ExamTaken extends CoreApi {
  createExamTaken(payload) {
    return this.http.post("examtaken", payload).then((res) => res.data);
  }
  updateTaken(data) {
    const { id, payload } = data;
    return this.http.put(`examtaken/${id}`, payload).then((res) => res.data);
  }
  update(id, data) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
}

export const ExamTakenService = new ExamTaken("examtaken");
