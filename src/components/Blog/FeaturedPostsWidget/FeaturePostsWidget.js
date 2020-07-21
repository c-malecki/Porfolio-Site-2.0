import React, { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { BlogPostPreview } from "../../index";
import { reformatDate } from "../../../assets/util/dates";

export const FeaturedPostsWidget = (props) => {
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
              date={reformatDate(post.date)}
              title={post.title}
              description={post.description}
              key={post.slug}
            />
          ))}
        </>
      );
    }
  };
  return (
    <div className="FeaturedPostsWidget-container">
      <h2>Featured Posts</h2>
      <div className="FeaturedPostsWidget-content">{postsContent()}</div>
    </div>
  );
};
