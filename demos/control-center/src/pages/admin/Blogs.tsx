import React, { useEffect, useState } from "react";

import { Table, message, Button, Popconfirm, Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

import { deleteBlog, getBlogList } from "../../services/blog";
import { Link } from "react-router-dom";
import { BLOGDETAIL } from "../../config/server";

import "./layout.css";

function List(props: any) {
  console.log(props);

  const [blogList, setBlogList] = useState([]);

  const getList = () => {
    getBlogList()
      .then((res: any) => {
        setBlogList(res.data.result);
      })
      .catch((err) => {
        message.warning(err.message);
      });
  };

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "name",
      render: (text: any, record: any, index: any) => {
        return index + 1;
      },
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text: any, record: any) => {
        return <Link to={`${BLOGDETAIL}/${record._id}`}>{record.title}</Link>;
      },
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
      render: (text: any, record: any) => {
        return (
          <Link to="/" /* to={`${record.author.id}`}*/>{record.author}</Link>
        );
      },
    },
    {
      title: "创作时间",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "最后修改时间",
      dataIndex: "updateDate",
      key: "update",
    },
    {
      title: "评论数",
      dataIndex: "comments",
      key: "update",
    },
    {
      title: "赞同数",
      dataIndex: "likes",
      key: "likes",
      render: (text: any, record: any) => record.likes.length,
    },
    {
      title: "操作",
      key: "operations",
      render: (text: any, record: any) => {
        return (
          <>
            <Button
              type="primary"
              size="small"
              onClick={() =>
                props.history.push(`/admin/blog/edit/${record._id}`)
              }>
              编辑
            </Button>
            <Popconfirm
              title="确认删除？"
              onCancel={() => message.info("已取消")}
              onConfirm={() =>
                deleteBlog(record._id)
                  .then((res: any) => {
                    message.success("删除成功！");
                    getList();
                  })
                  .catch((err) => {
                    message.warning(err.message);
                  })
                  .finally(() => {
                    getList();
                  })
              }>
              <Button
                className="left-space-10"
                type="default"
                danger
                size="small">
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    getList();
  }, []);

  return (
    <Card
      title="博客列表"
      extra={
        <Button
          size="middle"
          type="primary"
          onClick={() => {
            props.history.push("/admin/blog/edit");
          }}>
          <PlusSquareOutlined style={{ fontSize: "14px" }} />
          新增
        </Button>
      }>
      <Table rowKey="_id" columns={columns} dataSource={blogList} />;
    </Card>
  );
}

export default List;
