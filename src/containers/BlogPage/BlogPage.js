import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SingleBlogPost,
  BlogHome,
  Header,
  Footer,
} from "../../components/index";

export const BlogPage = () => {
  return (
    <div className="BlogPage-container">
      <Header />
      <div className="BlogPage-overlay">
        <div className="BlogPage-content">
          <Switch>
            <Route exact path="/blog" component={BlogHome} />
            <Route exact path="/blog/:slug" component={SingleBlogPost} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};
