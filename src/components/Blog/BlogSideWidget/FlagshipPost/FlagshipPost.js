import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../../../context/BlogContext";
import { reformatDate } from "../../../../assets/util/dates";

export const FlagshipPost = () => {
  const { isLoading, posts } = useContext(BlogContext);
  const flagshipPostContent = () => {
    if (isLoading) {
      return <div>loading</div>;
    } else {
      const flagPost = posts[0];
      const { slug, title, description, date } = flagPost;
      const img = flagPost.featured_image.fields.file.url;
      return (
        <Link className="FlagshipPost-content" to={`/blog/${slug}`}>
          <div className="FlagshipPost-img-container">
            <img src={img} alt={title} />
          </div>
          <div className="FlagshipPost-info">
            <small>{reformatDate(date)}</small>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      );
    }
  };
  return <>{flagshipPostContent()}</>;
};
