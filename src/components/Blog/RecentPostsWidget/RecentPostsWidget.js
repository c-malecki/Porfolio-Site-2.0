import React, { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { BlogPostPreview } from "../../index";

export const RecentPostsWidget = (props) => {
  const { isLoading, posts } = useContext(BlogContext);
  const postsContent = () => {
    if (isLoading) {
      return <div>loading</div>;
    } else {
      return (
        <>
          {posts.map((post) => (
            <BlogPostPreview
              slug={post.slug}
              img={post.featured_image.fields.file.url}
              date={post.date}
              title={post.title}
              description={post.description}
              key={post.slug}
            />
          ))}
        </>
      );
    }
  };
  return <div className="BlogPostsWidget-container">{postsContent()}</div>;
};
