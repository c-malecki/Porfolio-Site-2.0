import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SingleBlogPost,
  BlogHome,
  Header,
  Footer,
  BlogSideWidget,
} from "../../components/index";

export const BlogPage = () => {
  return (
    <div className="BlogPage-wrapper">
      <Route path="/" component={Header} />
      <div className="BlogPage-container">
        <div className="BlogPage-content-col1">
          <Switch>
            <Route exact path="/blog" component={BlogHome} />
            <Route exact path="/blog/:slug" component={SingleBlogPost} />
          </Switch>
        </div>
        <div className="BlogPage-content-col2">
          <Route path="/" component={BlogSideWidget} />
        </div>
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
};
