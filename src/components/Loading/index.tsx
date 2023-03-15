import React, { ReactNode, useEffect, useState } from "react";
import NeuContainer from "../NeuContainer";

import "./index.css";

interface Props {
  visible: boolean;
  children?: ReactNode;
}

const Loading = ({ visible, children }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(visible);
      console.log("111", 111);
    }, 100);
  }, [visible]);

  return (
    // <div className="loading-container">
    //   <div className="loading cube-box">
    //     <div className="outer-box">
    //       <NeuContainer className="large-box" type="protuberant">
    //         <NeuContainer className="small-box" type="sunken"></NeuContainer>
    //       </NeuContainer>
    //     </div>
    //   </div>
    // </div>
    <div className="loading-container">
      <div className={`mask ${visible ? "" : "container-hidden"}`}>
        <NeuContainer
          className={`flex-center ${show ? "flex-center-shadow" : ""}`}
          type="protuberant"
        >
          <div className={`ring ${show ? "ring-shadow" : ""}`}></div>
          <NeuContainer
            className={`inner-ring ${show ? "inner-ring-shadow" : ""}`}
            type="sunken"
          ></NeuContainer>
        </NeuContainer>
      </div>
      {children}
    </div>
  );
};

export default Loading;
