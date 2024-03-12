import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useChangePasswordMutation = () => {
  return useMutation((input) => AuthService.changePassword(input));
};
