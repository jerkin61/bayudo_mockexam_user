import React from "react";

const initialState = {
  view: undefined,
  isOpen: false,
  data: null,
};

function modalReducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
      };
    case "close":
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false,
      };
    default:
      throw new Error("Unknown Modal Action!");
  }
}

const ModalStateContext = React.createContext(initialState);
ModalStateContext.displayName = "ModalStateContext";
const ModalActionContext = React.createContext(undefined);
ModalActionContext.displayName = "ModalActionContext";

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>
        {children}
      </ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = React.useContext(ModalActionContext);
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal(view, payload) {
      dispatch({ type: "open", view, payload });
    },
    closeModal() {
      dispatch({ type: "close" });
    },
  };
}
