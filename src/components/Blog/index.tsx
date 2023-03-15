import React, { useEffect, useState } from "react";

import { FBlog } from "@/types/blogs";

import "./index.css";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { getBLogDetail } from "@/api/blogs";
import ReactMarkdown from "react-markdown";
import Loading from "../Loading";
import CodeBlock from "../CodeBlock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    getBLogDetail(id)
      .then((res) => {
        console.log("res", res);
        setBlog(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        setErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="toolbar"></div>
      <Loading visible={loading}>
        {blog ? (
          <>
            <h1 className="blog-title">{blog.title}</h1>

            <div className="blog-info">
              <div className="blog-author">{blog.author}</div>
              <div className="blog-gmtCreate">{blog.gmtCreate}</div>
              <div className="blog-likes">{blog.likes}</div>
            </div>
            <ReactMarkdown
              children={blog.content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </>
        ) : (
          !loading && <ErrorPage message={errorMessage} />
        )}
      </Loading>
    </div>
  );
};

export default Blog;
