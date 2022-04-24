import React, { useEffect, useState } from "react";
import { Input } from "antd";

import Parser from "../../utils/DocParser/index";

const { TextArea } = Input;

function Home() {
  const [reg, setReg] = useState<RegExp>(/^(#{1,6})(\s+)(.+)(\s*)$/);
  const [content, setContent] = useState<string>("");

  const [result, setResult] = useState("");
  const [replaceResult, setReplaceResult] = useState("");

  const replaceTitle = (
    match: string,
    titleString: string,
    spaceString: string,
    titleContent: string,
    offset: any,
    string: any
  ) => {
    console.log("match", match);
    console.log("titleString", titleString);
    console.log("spaceString ", spaceString);
    console.log("titleContent", titleContent);
    return `<h${titleString.length}>${titleContent}</h${titleString.length}`;
  };

  useEffect(() => {
    let result = content.match(reg as RegExp);
    console.log("result", result);
    if (true) {
      setResult(result ? result[0] : "");
      setReplaceResult(content.replace(reg, replaceTitle));
      (document.getElementById("markdown") as HTMLElement).innerHTML =
        content.replace(reg, replaceTitle);
    }
  }, [content, reg]);

  return (
    <div>
      <TextArea
        style={{ height: "200px", width: "100%", display: "inline-block" }}
        title="正则表达式"
        onChange={(e) => setReg(new RegExp(e.target.value))}
      />
      <TextArea
        title="测试文本"
        style={{ height: "200px", width: "100%", display: "inline-block" }}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextArea
        title="结果"
        style={{ height: "200px", width: "100%", display: "inline-block" }}
        value={result}
      />
      <TextArea
        title="替换后结果"
        style={{ height: "200px", width: "100%", display: "inline-block" }}
        value={replaceResult}
      />
      <div id="markdown"></div>
    </div>
  );
}

export default Home;
