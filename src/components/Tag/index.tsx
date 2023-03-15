import React, { ReactNode } from "react";
import NeuContainer from "../NeuContainer";

import "./index.css";

interface Props {
  children: ReactNode;
  color?: string;
}

const Tag = ({ children, color }: Props) => {
  return (
    <NeuContainer
      type="protuberant"
      style={{ color: color, cursor: "pointer", border: "none" }}
      className="tag"
    >
      <span>{children}</span>
    </NeuContainer>
  );
};

export default Tag;
