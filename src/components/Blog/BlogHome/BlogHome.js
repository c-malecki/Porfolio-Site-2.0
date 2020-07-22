import React from "react";
import { FeaturedPostsWidget, FlagshipPost } from "../../index";

export const BlogHome = () => {
  return (
    <div className="BlogHome-container">
      <FeaturedPostsWidget />
      <FlagshipPost />
    </div>
  );
};
