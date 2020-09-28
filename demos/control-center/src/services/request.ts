import axios from "axios";

import { serverConfig } from "../config/server";
import { getToken } from "../utils/auth";

const instance = axios.create({
  baseURL: serverConfig.baseURL,
  timeout: serverConfig.timeout,
});

// 全局请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在请求发送前，给请求头中添加 token
    config.headers["authorization"] = "Bearer " + getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 全局响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * get 请求
 * @param {string} url  请求地址
 * @param {any} params  请求参数
 */
export function get(url: string, params?: any) {
  return instance.get(url, {
    params,
  });
}

/**
 * post 请求
 * @param {string} url  请求地址
 * @param {any} data    数据
 */
export function post(url: string, data: any) {
  return instance.post(url, data);
}

/**
 * put 请求
 * @param {string} url  请求地址
 * @param {any} data    数据
 */
export function put(url: string, data: any) {
  return instance.put(url, data);
}

/**
 * delete 请求
 * @param {string} url  请求地址
 */
export function del(url: string) {
  return instance.delete(url);
}
