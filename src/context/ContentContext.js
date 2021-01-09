import React, { createContext, useState, useEffect } from "react";
import { getSiteContent } from "./contentful/client";

export const ContentContext = createContext();

export const ContentContextProvider = ({ children }) => {
  const [blogState, setBlogState] = useState({
    isLoading: true,
    posts: null,
    projects: null,
    error: null,
  });
  useEffect(() => {
    getSiteContent()
      .then((res) => {
        const allContent = res.map((p) => p.fields);
        const projects = allContent.filter((c) => c.type === "project");
        const blogPosts = allContent.filter((c) => c.type === "blog_post");
        const pageContent = allContent.filter((c) => c.type === "page_content");

        const allPostsSorted = blogPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
        setBlogState({
          isLoading: false,
          posts: allPostsSorted,
          projects: projects,
          pageContent: pageContent,
          error: null,
        });
      })
      .catch((error) =>
        setBlogState({
          isLoading: false,
          posts: null,
          projects: null,
          pageContent: null,
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
