import React, { useEffect, useState } from "react";

import { addBlog, getBlogList } from "@/api/blogs";
import { FBlog } from "@/types/blogs";

import JSONBlogList from "./blogList.json";
import Breviary from "./Breviary";

import "./index.css";
import Pagination from "../Pagination";
import Loading from "../Loading";

export const BlogList = () => {
  const [loading, setLoading] = useState(false);

  const [blogList, setBlogList] = useState<FBlog[]>([]);

  const [pageSize, setPageSize] = useState(20);

  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);

  const onBlogUpload = () => {
    const blog = {
      title: "吃饭",
      content: `
      \`\`\`javascript
      12300几分钟哦放假哦阿姐大佛\n
      \`\`\`
      `,
      author: "feline",
      tags: "react javascript food",
      likes: 10,
    };
    addBlog(blog)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onBLogUpdate = () => {
    setLoading(true);
    getBlogList(pageNum, pageSize)
      .then((res: any) => {
        setBlogList(res.data.list);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    onBLogUpdate();
  }, []);

  return (
    <div>
      <button onClick={onBlogUpload}>上传</button>
      <button onClick={onBLogUpdate}>刷新</button>
      <Loading visible={loading}>
        <div className="list-container">
          {blogList.length ? (
            blogList.map((blog, index: number) => {
              return <Breviary key={blog.id} blog={blog} />;
            })
          ) : (
            <div>暂无博客</div>
          )}
        </div>
      </Loading>

      <div>
        <Pagination />
      </div>
    </div>
  );
};
