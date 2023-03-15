import React, { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "@/components/NeuContainer";
import Constructing from "@/components/Constructing";
import NeuTest from "./src/components/NeuTest";
import { BlogList } from "@/components/Blog/BlogList";
import Blog from "@/components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>index</>,
  },
  {
    path: "/blog/list",
    element: <BlogList />,
  },
  {
    path: "/blog/detail/:id",
    element: <Blog />,
  },
  {
    path: "/neu/test",
    element: <NeuTest />,
  },
]);

function App() {
  return (
    <div className="main-container">
      <div className="left-bar">
        <NeuContainer type="protuberant">
          <Constructing />
        </NeuContainer>
      </div>
      <div className="right-bar">
        <NeuContainer type="sunken">
          <Constructing />
        </NeuContainer>
      </div>
      <div className="content-bar">
        <NeuContainer type="common">
          <RouterProvider router={router} />
        </NeuContainer>
      </div>
    </div>
  );
}

export default App;
