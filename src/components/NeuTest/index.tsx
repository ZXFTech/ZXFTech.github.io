import React from "react";

import imgUrl from "../../assets/avatar.jpg";

import NeuContainer from "../NeuContainer";

import "./index.css";

// type 描述整体突起还是塌陷  突起 | 塌陷 | 平坦(默认)
// surface 描述表面突起还是塌陷 突起 | 塌陷 | 平坦(默认)
// hover 鼠标移动到元素时的表现 突起 | 塌陷 | 表面突起 | 表面塌陷 | 无(默认)

const NeuTest = ({}) => {
  return (
    <div className="test-container">
      <NeuContainer type="sunken">
        <div>平面塌陷</div>
      </NeuContainer>
      <NeuContainer type="sunken" hover="common">
        <div>平面塌陷</div>
        <div>聚焦平坦</div>
      </NeuContainer>
      <NeuContainer type="sunken" hover="protuberant">
        <div>平面塌陷</div>
        <div>聚焦凸起</div>
      </NeuContainer>

      <div className="common-container hover-sunken">
        <div>平面平坦</div>
        <div>聚焦塌陷</div>
      </div>
      <div className="common-container hover-common">
        <div>平面平坦</div>
        <div>聚焦平坦</div>
      </div>
      <div className="common-container hover-protuberant">
        <div>平面平坦</div>
        <div>聚焦凸起</div>
      </div>

      <div className="protuberant-container hover-sunken">
        <div>平面突起</div>
        <div>聚焦塌陷</div>
      </div>
      <div className="protuberant-container hover-common">
        <div>平面突起</div>
        <div>聚焦平坦</div>
      </div>
      <div className="protuberant-container hover-protuberant">
        <div>平面突起</div>
        <div>聚焦凸起</div>
      </div>

      {/* 凸面 */}
      <div className="protuberant-container convex ">
        <div>凸面突起</div>
      </div>
      <div className="protuberant-container convex  hover-protuberant hover-flat">
        <div>凸面突起</div>
        <div>聚焦平面还原</div>
      </div>
      <div className="protuberant-container convex hover-concave hover-protuberant  ">
        <div>平面突起</div>
        <div>聚焦平面凹陷</div>
      </div>

      {/* 凹面 */}
      <div className="protuberant-container concave">
        <div>凹面突起</div>
      </div>
      <div className="protuberant-container concave hover-protuberant hover-flat">
        <div>凹面突起</div>
        <div>聚焦平面</div>
      </div>
      <div className="protuberant-container concave hover-protuberant hover-convex">
        <div>凹面突起</div>
        <div>聚焦凸起</div>
      </div>

      {/* <div className="flat-surface-container">
        <div>平面突起</div>
      </div>
      <div className="flat-surface-container hover-flat">
        <div>平面突起</div>
        <div>聚焦平坦</div>
      </div>
      <div className="flat-surface-container hover-sunken">
        <div>平面突起</div>
        <div>聚焦凹陷</div>
      </div>
      <div className="animate1 ">
        <div className="container">
          <img src={imgUrl} className="img" />
        </div>
      </div>
      <div className="animate2 ">animate2</div>
      <div className="sunken-surface-container ">sunken surface</div> */}
    </div>
  );
};

export default NeuTest;
