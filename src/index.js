import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/index";
import { BrowserRouter } from "react-router-dom";
import { ContentContextProvider } from "./context/ContentContext";
import "./assets/styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
