import React, { useEffect, useState } from "react";

// import KeywordEdit from "../../components/myKeywords/KeywordEdit";

import { Form, Input, Button, message, DatePicker } from "antd";
import { addBlog, getBlogDetail, updateBlog } from "../../services/blog";
import moment from "moment";

import "./layout.css";
import "braft-editor/dist/index.css";
import BraftEditor from "braft-editor";

// 整体布局设置
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// 博客编辑页
function Edit(props: any) {
  const [form] = Form.useForm();
  const [content, setContent] = useState(BraftEditor.createEditorState("111"));
  const [date, setDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  // const [keywords, setKeywords] = useState<string[]>([]);
  // const [allKeywords, setAllKeywords] = useState<string[]>([
  //   "test1",
  //   "test2",
  //   "test3",
  // ]);

  // 判断是否传入id判断新增还是修改
  useEffect(() => {
    if (props.match.params.id) {
      getBlogDetail(props.match.params.id)
        .then((res: any) => {
          const blog = res.data.result;
          console.log("content", blog.content);

          // 添加表单内容
          form.setFieldsValue({
            title: blog.title,
            author: blog.author,
            likes: [],
            comments: "",
            series: "",
            date: moment(blog.date),
            updateDate: moment(blog.updateDate),
          });
          setDate(blog.date ? blog.date : moment("YYYY-MM-DD h:mm:ss"));
          setUpdateDate(
            blog.updateDate ? blog.updateDate : moment("YYYY-MM-DD h:mm:ss")
          );
          // 添加富文本编辑器内容
          setContent(BraftEditor.createEditorState(blog.content));
        })
        .catch((err) => {
          message.warning(err.message);
        });
    }
  }, []);

  //#region keywords 关键词相关方法
  // const stringIsNotSpace = (text: string) => {
  //   return text.replace(/(^s*)|(s*$)/g, "").length !== 0;
  // };

  // const handleClick = (keyword: string) => {
  //   setKeywords(keywords.concat(keyword));
  //   setAllKeywords(allKeywords.concat(keyword));
  // };

  // const handleAdd = (newAllKeywords: string[], newKeywords: string[]) => {
  //   setKeywords([...newKeywords]);
  //   setAllKeywords([...newAllKeywords]);
  // };

  // const handleRemove = (keywords: string[]) => {
  //   setKeywords([...keywords]);
  // };
  //#endregion

  //#region calendar 日历相关方法
  const changeDate = (type: string, dateString: string) => {
    switch (type) {
      case "date":
        setDate(dateString);
        break;
      case "update":
        setUpdateDate(dateString);
        break;
      default:
        message.warning("无" + type + "类型");
    }
  };
  //#endregion

  //#region 文章内容相关
  const onContentChange = (editorState: any) => {
    setContent(editorState);
  };
  //#endregion

  // 保存
  const onFinish = (values: any) => {
    const newBlog = {
      ...values,
      date: date,
      updateDate: updateDate,
      content: content.toHTML(),
    };

    const blogId = props.match.params.id;
    if (values) {
      // 判断是否为更新
      if (blogId) {
        console.log("newBlog", newBlog);

        updateBlog(blogId, newBlog)
          .then((res: any) => {
            console.log("修改博客", blogId);
            message.success("保存成功！");
            props.history.push("/admin/blogs");
          })
          .catch((err) => {
            console.log(err);

            message.warning(err.message);
          });
      } else {
        addBlog(newBlog)
          .then((res: any) => {
            console.log("添加博客");
            message.success("保存成功！");
            props.history.push("/admin/blogs");
          })
          .catch((err) => {
            console.log(err);
            message.warning(err.message);
          });
      }
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      className="top-space-20">
      <Form.Item name="title" label="标题" rules={[{ required: true }]}>
        <Input placeholder="请输入文章标题。" />
      </Form.Item>
      {/* <KeywordEdit
        keywords={keywords}
        allKeywords={allKeywords}
        handleAddClick={handleAdd}
        handleClick={handleClick}
        handleRemove={handleRemove}
      /> */}
      <Form.Item name="author" label="作者" rules={[{ required: true }]}>
        <Input placeholder="请输入作者。" />
      </Form.Item>
      <Form.Item name="date" label="创作日期" rules={[{ required: true }]}>
        <DatePicker
          showTime
          // defaultValue={blog.date !== "" ? moment(blog.date) : undefined}
          onChange={(value: any, dateString: string) => {
            changeDate("date", dateString);
          }}
          placeholder="请选择创作日期"
        />
      </Form.Item>
      <Form.Item
        name="updateDate"
        label="最后修改日期"
        rules={[{ required: true }]}>
        <DatePicker
          showTime
          onChange={(value: any, dateString: string) => {
            changeDate("update", dateString);
          }}
        />
      </Form.Item>
      <Form.Item label="文章内容" name="content" rules={[{ required: true }]}>
        <BraftEditor
          onChange={(e) => onContentChange(e)}
          defaultValue={content}
        />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }>
        {({ getFieldValue }) => {
          return getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        <Button htmlType="button" onClick={onReset} className="left-space-20">
          取消
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Edit;
