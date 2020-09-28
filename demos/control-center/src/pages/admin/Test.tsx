import React, { useState } from "react";

import KeywordsEditor from "../../components/myKeywords/KeywordEdit";

function Test() {
  /**
   * 逻辑
   * 每当添加关键词输入框里发生变化，检测内容是否包含在所有关键词列表中
   * 如果在，则什么都不做，如果不在则加入。
   */
  const [keywords, setKeywords] = useState(["123"]);
  const [allKeywords, setAllKeywords] = useState(["test1", "test2", "123"]);

  //添加时
  const handleClick = (keyword: string) => {
    setKeywords(keywords.concat(keyword));
    setAllKeywords(allKeywords.concat(keyword));
  };

  const handleAdd = (newAllKeywords: string[], newKeywords: string[]) => {
    setKeywords([...newKeywords]);
    setAllKeywords([...newAllKeywords]);
  };

  const handleRemove = (keywords: string[]) => {
    setKeywords([...keywords]);
  };

  return (
    <KeywordsEditor
      keywords={keywords}
      allKeywords={allKeywords}
      handleAddClick={handleAdd}
      handleClick={handleClick}
      handleRemove={handleRemove}
    />
  );
}

export default Test;
