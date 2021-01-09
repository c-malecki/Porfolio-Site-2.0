import React, { createContext, useState, useEffect } from "react";
import { getBlogPosts } from "./contentful/client";

export const ContentContext = createContext();

export const ContentContextProvider = ({ children }) => {
  const [blogState, setBlogState] = useState({
    isLoading: true,
    posts: null,
    projects: null,
    error: null,
  });
  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        const allContent = res.map((p) => p.fields);
        const projects = allContent.filter((c) => c.contentType === "project");
        const blogPosts = allContent.filter((c) => c.contentType === undefined);

        const allPostsSorted = blogPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
        setBlogState({
          isLoading: false,
          posts: allPostsSorted,
          projects: projects,
          error: null,
        });
      })
      .catch((error) =>
        setBlogState({
          isLoading: false,
          posts: null,
          projects: null,
          error: error.message,
        })
      );
  }, []);

  return (
    <ContentContext.Provider
      value={{
        ...blogState,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
