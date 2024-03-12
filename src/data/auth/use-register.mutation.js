import { useMutation } from "react-query";
import { AuthService } from "./auth.service";

export const useRegisterMutation = () => {
  return useMutation((input) => AuthService.register(input));
};
