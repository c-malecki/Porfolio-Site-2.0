import React, { createContext, Component } from "react";
import { projects } from "./projectsData";

export const AppContext = createContext();

export class AppContextProvider extends Component {
  state = {
    page: 0,
    projects: projects,
  };
  changePage = (id) => {
    this.setState({ page: id });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          changeLayout: this.changeLayout,
          changePage: this.changePage,
          changeToggle: this.changeToggle,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
