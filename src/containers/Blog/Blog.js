import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { FeaturedPostsWidget, SingleBlogPost } from "../../components/index";

export const Blog = () => {
  return (
    <div className="BlogPage-container">
      <div className="BlogPage-overlay">
        <div className="BlogPage-content">
          <h1>Blog</h1>
          <div style={{ marginBottom: "1rem" }}>
            <Link to="/" className="nav-link">{`< home`}</Link>
          </div>
          <Switch>
            <Route exact path="/blog" component={FeaturedPostsWidget} />
            <Route exact path="/blog/:slug" component={SingleBlogPost} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
