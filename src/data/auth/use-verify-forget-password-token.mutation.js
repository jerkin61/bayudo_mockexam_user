import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useVerifyForgetPasswordTokenMutation = () => {
  return useMutation((input) => AuthService.verifyForgetPassword(input));
};
