import React from "react";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import BlogPosts from "./views/BlogPosts";
import BlogDetail from "./views/BlogDetail";
import PropertySearch from "./views/PropertySearch";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/blogs" />,
    },
    {
      path: "/blogs",
      element: <BlogPosts />,
    },
    {
      path: "/blog/:id",
      element: <BlogDetail />,
    },
    {
      path: "propertySearch",
      element: <PropertySearch />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Routes;
