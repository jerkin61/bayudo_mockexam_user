import Cookies from "js-cookie";
export const permissions = Cookies.get("auth_permissions");
export function loggedIn() {
  const token = Cookies.get("auth_token");
  if (!token) return false;
  if (token) {
    if (
      !permissions?.includes("user") &&
      !permissions?.includes("staff") &&
      !permissions?.includes("super_admin")
    ) {
      return false;
    }
  }
  return true;
}
