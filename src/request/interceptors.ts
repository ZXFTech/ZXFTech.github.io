import { message } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";

interface IConfig {
  [key: string]: any;
}

interface FError {
  errorNumber: number;
  errorMessage: string;
}

interface FNormalObj {
  [key: string]: string;
}

const errorStatusEnum: FNormalObj = {
  "400": "错误的请求",
  "401": "未授权，请重新登录",
  "403": "拒绝访问",
  "404": "请求错误,未找到该资源",
  "405": "请求方法未允许",
  "408": "请求超时",
  "500": "服务器端出错",
  "501": "网络未实现",
  "502": "网络错误",
  "503": "服务不可用",
  "504": "网络超时",
  "505": "http版本不支持该请求",
};

export const handleNetworkError = (errorStatus: string) => {
  let errorMessage = "未知错误";

  if (errorStatus) {
    errorMessage =
      errorStatusEnum[errorStatus] || `其他连接错误 --${errorStatus}`;
  } else {
    errorMessage = "无法连接到服务器";
  }

  message.error(errorMessage);
};

// header 配置
export const handleRequestHeader = (config: IConfig) => {
  return config;
};

// 鉴权处理
export const handleAuth = (config: IConfig) => {
  config.header["token"] = localStorage.getItem("token") || "";
  return config;
};

// 相应处理
export const handleResponse = (response: AxiosResponse) => {
  if (response.status.toString().startsWith("2")) {
    return response.data;
  }
  return response.data;
};

// 错误处理
export const handleError = (error: AxiosError) => {
  let errorMessage =
    errorStatusEnum[error.code] ||
    `其他错误 -- 错误码:${error.code} 错误信息:${error.message}`;
  console.log(errorMessage);
  return Promise.reject(errorMessage);
};
