import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../../../context/BlogContext";
import { reformatDate } from "../../../assets/util/dates";
import MD from "react-markdown";

export const SingleBlogPost = () => {
  const { isLoading, posts } = useContext(BlogContext);
  const [postForPage, setPostForPage] = useState({
    pageIsLoading: true,
    post: null,
    pageError: null,
  });
  const { slug } = useParams();
  useEffect(() => {
    if (posts) {
      const foundPost = posts.filter((p) => p.slug === slug);
      if (foundPost.length > 0) {
        setPostForPage({
          pageIsLoading: false,
          post: foundPost[0],
          pageError: null,
        });
      } else {
        setPostForPage({
          pageIsLoading: false,
          post: null,
          pageError:
            "There was a problem loading this post or it does not exist.",
        });
      }
    }
  }, [slug, posts]);

  const renderPost = () => {
    const { pageIsLoading, post, pageError } = postForPage;
    if (isLoading || pageIsLoading) {
      return <div>loading</div>;
    } else if (pageError) {
      return <div>{pageError}</div>;
    } else {
      return (
        <>
          <div className="SinglePost-intro">
            <h2 className="SinglePost-intro-title">{post.title}</h2>
            <small className="SinglePost-intro-date">
              {reformatDate(post.date)}
            </small>

            <img
              className="SinglePost-intro-img"
              src={post.featured_image.fields.file.url}
              alt={post.title}
            />
          </div>

          <div className="SinglePost-body">
            <MD source={post.content_body} />
          </div>
        </>
      );
    }
  };
  return (
    <div className="SingleBlogPost-container">
      <div className="SinglePost-navigation">
        <Link to="/blog" className="back-to-blog">
          {"< Back"}
        </Link>
      </div>
      {renderPost()}
    </div>
  );
};
