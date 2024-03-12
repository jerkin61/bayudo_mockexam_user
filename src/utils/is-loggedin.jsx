import Cookies from "js-cookie";
export function loggedIn() {
  const token = Cookies.get("auth_token");
  if (!token) return false;
  if (token) {
    const permissions = Cookies.get("auth_permissions");
    if (
      !permissions?.includes("user") &&
      !permissions?.includes("super_admin")
    ) {
      return false;
    }
  }
  return true;
}
