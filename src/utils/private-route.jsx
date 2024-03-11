import React from "react";
import { useRouter } from "next/router";
import { getAuthCredentials, hasAccess } from "./auth-utils";
// import Loader from "@components/ui/loader/loader";

const PrivateRoute = ({ children, authProps }) => {
  const router = useRouter();
  const { token, permissions } = getAuthCredentials();
  const isUser = !!token;
  const hasPermission =
    Array.isArray(permissions) &&
    !!permissions.length &&
    hasAccess(authProps.permissions, permissions);

  console.log("PrivateRoute", isUser);
  React.useEffect(() => {
    if (!isUser) router.replace("/login"); // If not authenticated, force log in
  }, [isUser]);

  if (isUser && hasPermission) {
    return <>{children}</>;
  }
  if (isUser && !hasPermission) {
    return <div>Access Denied Page</div>;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loader </div>;
  // return <Loader showText={false} />;
};

export default PrivateRoute;