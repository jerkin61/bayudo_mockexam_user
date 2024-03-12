import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useSocialLoginMutation = () => {
  return useMutation((input) => AuthService.socialLogin(input));
};
