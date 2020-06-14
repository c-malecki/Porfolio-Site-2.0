import React, { useContext } from "react";
import { ScreenContainer, TraditionalPage } from "../index";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const App = () => {
  const { layout } = useContext(AppContext);
  return (
    <div className="App">
      <BrowserRouter>
        {layout === true ? <ScreenContainer /> : <TraditionalPage />}
      </BrowserRouter>
    </div>
  );
};

export default App;
