import React from "react";
import SyntaxHighlighter, { vscDarkPlus } from "react-syntax-highlighter";

interface Props {
  code: string;
}

const CodeBlock = ({ code }: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
