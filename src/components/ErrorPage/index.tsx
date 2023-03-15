import React, { Children, ReactNode } from "react";

import NeuContainer from "@/components/NeuContainer";

import "./index.css";

interface Props {
  children?: ReactNode;
  message?: string;
}

const ErrorPage = ({ children, message }: Props) => {
  return (
    <div className="error-container">
      <div>出错啦！</div>
      {message ? (
        <div>
          <div>错误信息如下:</div>
          {message}
        </div>
      ) : (
        <></>
      )}
      <div>{children || "请联系作者blablablablablablablabla..."}</div>
    </div>
  );
};

export default ErrorPage;
