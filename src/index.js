import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/index";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context/BlogContext";
import "./assets/styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
