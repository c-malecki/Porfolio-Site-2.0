import React, { createContext, useState, useCallback } from "react";
import { projects, carousel } from "./projectsData";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    page: 0,
    projects: projects,
    carousel: carousel,
    toFixed: false,
    elRef: null,
  });
  const changePage = (id) => {
    setAppState((prevState) => ({ ...prevState, page: id }));
  };
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
        changePage: changePage,
        changeToFixed: changeToFixed,
        getRef: getRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
