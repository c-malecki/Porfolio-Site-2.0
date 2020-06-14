import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { MobileMenu } from "../index";

export const MobileNavigation = () => {
  const { page, changePage } = useContext(AppContext);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const arrowRight = () => {
    if (page === 0) {
      history.push("/about");
    } else if (page === 1) {
      history.push("/projects");
    } else if (page === 2) {
      history.push("/contact");
    } else {
      history.push("/home");
    }
    let pageId = page;
    pageId = pageId < 3 ? ++pageId : pageId;
    changePage(pageId);
  };
  const arrowLeft = () => {
    if (page === 3) {
      history.push("/projects");
    } else if (page === 2) {
      history.push("/about");
    } else if (page === 1) {
      history.push("/home");
    }
    let pageId = page;
    pageId = pageId > 0 ? --pageId : pageId;
    changePage(pageId);
  };
  return (
    <div className="mobile-navigation-z">
      <div className="mobile-navigation-container">
        <button id="left" onClick={() => arrowLeft()}>{`<`}</button>
        <button id="menu" onClick={() => toggleMenu()}>
          {!isOpen ? (
            <i className="fas fa-bars" onClick={() => toggleMenu()}></i>
          ) : (
            <i className="fas fa-times" onClick={() => toggleMenu()}></i>
          )}
        </button>

        <button id="right" onClick={() => arrowRight()}>{`>`}</button>
      </div>
      <MobileMenu isOpen={isOpen} />
    </div>
  );
};
