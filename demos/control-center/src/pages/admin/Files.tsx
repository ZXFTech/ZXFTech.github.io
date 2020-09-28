import React, { useState } from "react";

import { Upload, message, Button, Card } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { baseURL } from "../../config/server";

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function Files() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setIsLoading(false);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log(info.file);
      console.log(imageUrl);
    }
  };

  const handleDownload = () => {
    // window.open("/file/");
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div>
      <h2>文件上传下载测试页面</h2>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`${baseURL}/file/upload`}
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      {/* <button onClick={handleDownload}>下载</button> */}
      <Card>
        <a
          href={`${baseURL}/file/download/?name=upload_dd61f560ab7d0aee9422238ead992e03.png`}
          download="test.png">
          下载文件
        </a>
      </Card>
    </div>
  );
}

export default Files;
