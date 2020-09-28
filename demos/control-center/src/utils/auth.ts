export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocal = (key: string) => {
  localStorage.getItem(key);
};

export const clearLocal = () => {
  localStorage.clear();
};
