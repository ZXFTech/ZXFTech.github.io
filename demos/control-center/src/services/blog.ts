import { get, post } from "./request";
import {
  BLOGLIST,
  BLOGADD,
  BLOGDETAIL,
  BLOGDELETE,
  BLOGUPDATE,
} from "../config/server";
import { Blog } from "../interface/Blog";

/**
 * 获取博客列表
 * @param {number} per 每页数量 默认10
 * @param {number} page 当前页数 默认1
 * @param {string[]} keywords 关键词列表 默认[]
 * @param {string} series 文章系列 默认""
 */
export const getBlogList = (per = 10, page = 1, keywords = [], series = "") => {
  // return get(BLOGLIST, { per, page, keywords, series });
  return get(BLOGLIST);
};

/**
 * 获取博客文章详情
 * @param {string} blogID 博客文章ID
 */
export const getBlogDetail = (blogID: string) => {
  return get(`${BLOGDETAIL}/?id=${blogID}`, blogID);
};

/**
 * 添加博客
 * @param {Blog} newBlog 博客文章
 */
export const addBlog = (newBlog: Blog) => {
  return post(BLOGADD, newBlog);
};

/**
 * 更新博客
 * @param {string} blogID 博客文章ID
 * @param {Blog} newBlog 博客文章
 */
export const updateBlog = (blogID: string, newBlog: Blog) => {
  return post(`${BLOGUPDATE}/?id=${blogID}`, { ...newBlog });
};

/**
 * @param {string} blogID 博客文章ID
 */
export const deleteBlog = (blogID: string) => {
  return post(`${BLOGDELETE}/?id=${blogID}`, blogID);
};
