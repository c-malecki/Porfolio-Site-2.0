import React, { Component } from "react";
import "./styles/LandingBanner.css";

class LandingBanner extends Component {
  render() {
    return (
      <div className="content">
        <div className="banner-background">
          <div className="banner-content">
            <div className="banner-message-container">
              <div className="text-1">My name is Chris.</div>
              <div className="text-2">I am a Web Developer.</div>
              <div className="text-3">Welcome!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBanner;
