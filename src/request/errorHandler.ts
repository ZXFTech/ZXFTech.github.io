import { message } from "antd";

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

const handleNetworkError = (errorStatus: string) => {
  let errorMessage = "未知错误";

  if (errorStatus) {
    errorMessage =
      errorStatusEnum[errorStatus] || `其他连接错误 --${errorStatus}`;
  } else {
    errorMessage = "无法连接到服务器";
  }

  message.error(errorMessage);
};

// 鉴权错误处理
const handleAuthError = (errNo: string | number) => {
  const authErrMap: FNormalObj = {
    "10031": "登录失效，需要重新登录", // token 失效
    "10032": "您太久没登录，请重新登录~", // token 过期
    "10033": "账户未绑定角色，请联系管理员绑定角色",
    "10034": "该用户未注册，请联系管理员注册用户",
    "10035": "code 无法获取对应第三方平台用户",
    "10036": "该账户未关联员工，请联系管理员做关联",
    "10037": "账号已无效",
    "10038": "账号未找到",
  };

  if (authErrMap[errNo]) {
    // 发出错误信息
    message.error(authErrMap[errNo]);
    // 登出
    // logout()
    return true;
  }

  return false;
};

const handleGeneralError = ({ errorMessage, errorNumber }: FError) => {
  if (errorNumber !== 0) {
    // 发出错误
    message.error(errorMessage);
    return true;
  }
  return false;
};
