import { CoreApi } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";

class Auth extends CoreApi {
  login(input) {
    return this.http.post(API_ENDPOINTS.LOGIN, input).then((res) => res.data);
  }
  socialLogin(input) {
    return this.http
      .post(API_ENDPOINTS.SOCIAL_LOGIN, input)
      .then((res) => res.data);
  }
  register(input) {
    return this.http
      .post(API_ENDPOINTS.REGISTER, input)
      .then((res) => res.data);
  }
  logout() {
    return this.http.post(API_ENDPOINTS.LOGOUT);
  }
  changePassword(input) {
    return this.http
      .post(API_ENDPOINTS.CHANGE_PASSWORD, input)
      .then((res) => res.data);
  }
  forgetPassword(input) {
    return this.http
      .post(API_ENDPOINTS.FORGET_PASSWORD, input)
      .then((res) => res.data);
  }
  resetPassword(input) {
    return this.http
      .post(API_ENDPOINTS.RESET_PASSWORD, input)
      .then((res) => res.data);
  }
  verifyForgetPassword(input) {
    return this.http
      .post(API_ENDPOINTS.VERIFY_FORGET_PASSWORD, input)
      .then((res) => res.data);
  }
}

export const AuthService = new Auth("auth");
