import React from "react";

// 左侧 图标加名称
// 右侧 导航栏
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="icon-name-container"></div>
      <div className="navbar">
        <ul>
          <li className="link">主页</li>
          <li className="link">博文</li>
          <li className="link">时间线</li>
          <li className="link">分类</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
