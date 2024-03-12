import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useForgetPasswordMutation = () => {
  return useMutation((input) => AuthService.forgetPassword(input));
};
