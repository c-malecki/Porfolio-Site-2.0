import React, { createContext, useState, useCallback } from "react";
import { projects } from "./projectsData";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    projects: projects,
    toFixed: false,
    elRef: null,
  });
  const changeToFixed = (bool) => {
    setAppState((prevState) => ({ ...prevState, toFixed: bool }));
  };
  const getRef = useCallback((ref) => {
    setAppState((prevState) => ({ ...prevState, elRef: ref }));
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...appState,
        changeToFixed: changeToFixed,
        getRef: getRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
