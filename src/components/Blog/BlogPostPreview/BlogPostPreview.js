import React from "react";
import { Link } from "react-router-dom";

export const BlogPostPreview = (props) => {
  const { slug, img, title, date, description } = props;
  return (
    <Link className="BlogPostPreview-container" to={`/blog/${slug}`}>
      <div className="BlogPostPreview-img-container">
        <img src={img} alt={title} />
      </div>
      <div className="BlogPostPreview-content">
        <small>{date}</small>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
