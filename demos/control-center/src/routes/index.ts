import Dashboard from "../pages/admin/Dashboard";
import Blogs from "../pages/admin/Blogs";
import Edit from "../pages/admin/Edit";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Test from "../pages/admin/Test";
import File from "../pages/admin/Files";
import { FileSearchOutlined } from "@ant-design/icons";

export const adminRoutes = [
  {
    name: "dashboard",
    title: "控制面板",
    path: "/admin/dashboard",
    component: Dashboard,
    isListItem: true,
  },
  {
    name: "blogPage",
    title: "博客列表",
    path: "/admin/blogs",
    component: Blogs,
    isListItem: true,
  },
  {
    name: "blogEditPage",
    title: "博客编辑页",
    path: "/admin/blog/edit/:id?",
    component: Edit,
    isListItem: false,
  },
  {
    name: "testPage",
    title: "测试页面",
    path: "/admin/test",
    component: Test,
    isListItem: true,
  },
  {
    name: "fileUploadTestPage",
    title: "文件上传下载测试页面",
    path: "/admin/files",
    component: File,
    isListItem: true,
  },
];

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: PageNotFound,
  },
];
