import Cookie from "js-cookie";
import SSRCookie from "cookie";
import {
  AUTH_CRED,
  PERMISSIONS,
  STAFF,
  STORE_OWNER,
  SUPER_ADMIN,
  TOKEN,
} from "./constants";

export const allowedRoles = [SUPER_ADMIN, STORE_OWNER, STAFF];
export const adminAndOwnerOnly = [SUPER_ADMIN, STORE_OWNER];
export const adminOwnerAndStaffOnly = [SUPER_ADMIN, STORE_OWNER, STAFF];
export const adminOnly = [SUPER_ADMIN];
export const ownerOnly = [STORE_OWNER];

export function setAuthCredentials(token, permissions) {
  if (typeof token === "string") {
    Cookie.set(AUTH_CRED, JSON.stringify({ token, permissions }));
  }
}

export function getAuthCredentials(context) {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_CRED];
  } else {
    authCred = Cookie.get(AUTH_CRED);
  }
  if (authCred) {
    const decodedAuthCred = decodeURIComponent(authCred);
    return JSON.parse(decodedAuthCred);
  }

  return { token: null, permissions: null };
}

export function parseSSRCookie(context) {
  return SSRCookie.parse(context.req.headers.cookie ?? "");
}

export function hasAccess(_allowedRoles, _userPermissions) {
  if (_userPermissions) {
    return Boolean(
      _allowedRoles?.find((aRole) => _userPermissions.includes(aRole))
    );
  }
  return false;
}
export function isAuthenticated(_cookies) {
  return (
    !!_cookies[TOKEN] &&
    Array.isArray(_cookies[PERMISSIONS]) &&
    !!_cookies[PERMISSIONS].length
  );
}

export const limitOfRetries = 1;
