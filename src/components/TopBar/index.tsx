import React from "react";

import avatarUrl from "../../assets/avatar.jpg";
import "./index.css";

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-assert-part">
        <div className="top-bar-assert-container">
          <img src={avatarUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
