import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/index";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import "./assets/styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
