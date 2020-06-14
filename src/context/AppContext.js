import React, { createContext, Component } from "react";
import { projects } from "./projectsData";

export const AppContext = createContext();

export class AppContextProvider extends Component {
  state = {
    layout: false,
    page: 0,
    toggle: 0,
    projects: projects,
  };
  changeLayout = () => {
    const { layout } = this.state;
    this.setState({ layout: !layout });
  };
  changePage = (id) => {
    this.setState({ page: id });
  };
  changeToggle = (val) => {
    this.setState({ toggle: val });
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
