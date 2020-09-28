import styles from "./keyword.module.css";
import Keyword from "./Keyword";
import React, { useState } from "react";

export default function KeywordsEdit({
  keywords,
  allKeywords,
  handleRemove,
  handleClick,
  handleAddClick,
}) {
  const [newKeyword, setNewKeyword] = useState("")
  const stringIsNotSpace = (text) => {
    return text.replace(/(^s*)|(s*$)/g, "").length !== 0;
  };

  const updateKeywords = (array, item) => {
    return !array.includes(item) && stringIsNotSpace(item) ? [...array, item] : array

  }

  const showKeywords = () => {
    // 已经出现在关键词列表中的关键词不用显示
    const temp = allKeywords.filter((keyword) => !keywords.includes(keyword))
    // 如果新关键词包含在所有关键词列表中，也不显示
    const show = !allKeywords.includes(newKeyword) && stringIsNotSpace(newKeyword) ? [...temp, newKeyword] : temp
    return show
  }



  return (
    <div>
      <div className={styles.editKeywords}>
        <span>关键词</span>
        <div className={styles.editKeywordArea}>
          {keywords &&
            keywords.map((keyword, index) => (
              <Keyword
                key={index}
                isX={true}
                keyword={keyword}
                handleClick={(keyword) => {
                  keywords = keywords.filter((item) => keyword !== item);
                  handleRemove(keywords)
                }}
              />
            ))}
        </div>
      </div>
      <div className={styles.keywordControl}>
        <div className={styles.addKeywordArea}>
          <span>选择或添加一个关键词</span>
          <input
            id="addKeywordInput"
            className={styles.addKeywordInput}
            type="text"
            onChange={(e) => { setNewKeyword(e.target.value) }}
            autoComplete="off"
          />
          <input
            type="button"
            value="添加"
            onClick={() => {
              handleAddClick(updateKeywords(allKeywords, newKeyword), updateKeywords(keywords, newKeyword));
              document.getElementById("addKeywordInput").value = "";
            }}
          />
        </div>
        <div className={styles.chooseKeywordArea}>
          {allKeywords &&
            keywords &&
            showKeywords().map((keyword, index) => {
              return (
                // <div key={index} className={styles.keyword_edit }>
                //     <span className={styles.content} onClick={}>{keyword}</span>
                // </div>
                <Keyword
                  key={index}
                  keyword={keyword}
                  handleClick={() => {
                    handleClick(keyword);
                    document.getElementById("addKeywordInput").value = "";
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
