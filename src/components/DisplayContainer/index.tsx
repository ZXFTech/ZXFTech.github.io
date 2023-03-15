import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DisplayContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>首页</h1>} />
      <Route path="/blog" element={<h1>博客列表</h1>} />
      <Route path="/contact" element={<h1>联系我</h1>} />
      <Route path="/404" element={<h1>404</h1>} />
    </Routes>
  );
};
