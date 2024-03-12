import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useLoginMutation = () => {
  return useMutation((input) => AuthService.login(input));
};
