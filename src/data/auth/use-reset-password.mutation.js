import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useResetPasswordMutation = () => {
  return useMutation((input) => AuthService.resetPassword(input));
};
