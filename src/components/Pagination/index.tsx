import React from "react";
import NeuContainer from "../NeuContainer";

import "./index.css";

interface Props {
  pageNum: number;
  pageSize: number;
  onPageNumChanged: CallableFunction;
  onPageSizeChanged: CallableFunction;
  total: number;
  showTotal: boolean;
}

function Pagination() {
  return (
    <div className="pagination-container">
      <NeuContainer className="page-letter" type="protuberant">
        尾页
      </NeuContainer>
      <NeuContainer className="page-prev" type="protuberant">
        上一页
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        1
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        2
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        3
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        4
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        5
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        6
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        7
      </NeuContainer>
      <NeuContainer className="page-number" type="protuberant">
        8
      </NeuContainer>
      <NeuContainer className="page-next" type="protuberant">
        下一页
      </NeuContainer>
      <NeuContainer className="page-letter" type="protuberant">
        尾页
      </NeuContainer>
      <NeuContainer className="page-input" type="protuberant">
        跳转至
        <input />
      </NeuContainer>
    </div>
  );
}

export default Pagination;
