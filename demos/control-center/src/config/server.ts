export const baseURL = "http://localhost:8000";

export const serverConfig = {
  baseURL,
  timeout: 1000,
  headers: { "Example-Custom-Header": "foobar" },
};

export const BLOGLIST = baseURL + "/blogs/list";
export const BLOGDETAIL = baseURL + "/blogs/detail";
export const BLOGADD = baseURL + "/blogs/add";
export const BLOGUPDATE = baseURL + "/blogs/update";
export const BLOGDELETE = baseURL + "/blogs/delete";
