module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "./rules/eslint/best-practices/airbnb.js",
    "./rules/eslint/errors/airbnb.js",
    "./rules/eslint/es6/airbnb.js",
    "./rules/eslint/node/airbnb.js",
    "./rules/eslint/strict/airbnb.js",
    "./rules/eslint/style/airbnb.js",
    "./rules/eslint/variables/airbnb.js",
    "./rules/filenames/airbnb.js",
    "./rules/eslint/node/airbnb.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", "space"], // Tab 使用两个空格
    "linebreak-style": ["error", "unix"], // 换行符统一使用 \n
    quotes: ["error", "double"], // 所有字符串使用双引号
    semi: ["error", "always"], // 语句结尾必须带分号
    curly: ["error", "multi", "consistent"], // if 语句严格带大括号
    "no-unser-var": ["error", "true"], // 不能有声明后未使用的变量或参数
  },
};
