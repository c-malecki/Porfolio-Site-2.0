import React, { createContext, useState, useEffect } from "react";
import { getBlogPosts } from "./contentful/client";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogState, setBlogState] = useState({
    isLoading: true,
    posts: null,
    error: null,
  });
  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        const allPosts = res.map((p) => p.fields);
        const allPostsSorted = allPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
        setBlogState({
          isLoading: false,
          posts: allPostsSorted,
          error: null,
        });
      })
      .catch((error) =>
        setBlogState({
          isLoading: false,
          posts: null,
          error: error.message,
        })
      );
  }, []);

  return (
    <BlogContext.Provider
      value={{
        ...blogState,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
