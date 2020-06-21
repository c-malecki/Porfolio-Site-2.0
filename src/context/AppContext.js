import React, { createContext, useState } from "react";
import { projects } from "./projectsData";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    page: 0,
    projects: projects,
    toFixed: false,
  });
  const changePage = (id) => {
    setAppState((prevState) => ({ ...prevState, page: id }));
  };
  const changeToFixed = (bool) => {
    setAppState((prevState) => ({ ...prevState, toFixed: bool }));
  };
  return (
    <AppContext.Provider
      value={{
        ...appState,
        changePage: changePage,
        changeToFixed: changeToFixed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export class AppContextProvider extends Component {
//   state = {
//     page: 0,
//     projects: projects,
//   };
//   changePage = (id) => {
//     this.setState({ page: id });
//   };
//   render() {
//     return (
//       <AppContext.Provider
//         value={{
//           ...this.state,
//           changePage: this.changePage,
//         }}
//       >
//         {this.props.children}
//       </AppContext.Provider>
//     );
//   }
// }
// export const AppContext = createContext();
