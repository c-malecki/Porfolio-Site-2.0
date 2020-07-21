import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/index";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { BlogContextProvider } from "./context/BlogContext";
import "./assets/styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
