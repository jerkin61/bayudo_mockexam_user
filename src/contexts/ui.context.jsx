import { loggedIn } from "@utils/is-loggedin";
import Cookies from "js-cookie";
import React, { useMemo } from "react";

const initialState = {
  isAuthorize: loggedIn(),
  // sidebarView: "CART_VIEW",
  displaySidebar: false,
  displayHeaderSearch: false,
  displayMobileSearch: false,
  displayModalStickyBar: false,
};
const token = Cookies.get("auth_token");
const permissions = Cookies.get("auth_permissions");
console.log("loggedIn(),", loggedIn(), token, permissions);

console.log(
  '    if (!permissions?.includes("super_admin"',
  !permissions?.includes("super_admin")
);
export const UIContext = React.createContext(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state, action) {
  switch (action.type) {
    case "AUTHORIZE": {
      return {
        ...state,
        isAuthorize: true,
      };
    }
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case "SET_SIDEBAR_VIEW": {
      return {
        ...state,
        sidebarView: action.view,
      };
    }
    case "SHOW_HEADER_SEARCH": {
      return {
        ...state,
        displayHeaderSearch: true,
      };
    }
    case "HIDE_HEADER_SEARCH": {
      return {
        ...state,
        displayHeaderSearch: false,
      };
    }
    case "SHOW_MODAL_STICKY_BAR": {
      return {
        ...state,
        displayModalStickyBar: true,
      };
    }
    case "HIDE_MODAL_STICKY_BAR": {
      return {
        ...state,
        displayModalStickyBar: false,
      };
    }
    case "TOGGLE_MOBILE_SEARCH": {
      return {
        ...state,
        displayMobileSearch: !state.displayMobileSearch,
      };
    }
  }
}

export const UIProvider = (props) => {
  console.log("ssssloggedIn(),", loggedIn(), token, permissions);
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const authorize = () => dispatch({ type: "AUTHORIZE" });
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_SIDEBAR" })
      : dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_SIDEBAR" });
  const setSidebarView = (view) => dispatch({ type: "SET_SIDEBAR_VIEW", view });

  const showHeaderSearch = () => dispatch({ type: "SHOW_HEADER_SEARCH" });
  const hideHeaderSearch = () => dispatch({ type: "HIDE_HEADER_SEARCH" });
  const showModalStickyBar = () => dispatch({ type: "SHOW_MODAL_STICKY_BAR" });
  const hideModalStickyBar = () => dispatch({ type: "HIDE_MODAL_STICKY_BAR" });
  const toggleMobileSearch = () => dispatch({ type: "TOGGLE_MOBILE_SEARCH" });

  const value = useMemo(
    () => ({
      ...state,
      authorize,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      setSidebarView,
      closeSidebarIfPresent,
      showHeaderSearch,
      hideHeaderSearch,
      showModalStickyBar,
      hideModalStickyBar,
      toggleMobileSearch,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
