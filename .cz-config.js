module.exports = {
  types: [
    { value: "feat", name: "feat:   新功能" },
    { value: "fix", name: "fix:   bug 修复" },
    { value: "docs", name: "docs:   仅文档变更,不涉及代码改动" },
    {
      value: "style",
      name: "style:    仅格式变动,不影响代码逻辑\n            (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "refactor: 重构代码,非新增代码/bug修复,如果有 bug 编号,需要添加上",
    },
    {
      value: "perf",
      name: "perf:     优化性能,提升代码执行性能",
    },
    { value: "test", name: "test:     新增测试,追加测试用例代码" },
    {
      value: "chore",
      name: "chore:    事务变动,改动构建工具或外部依赖\n            and libraries such as documentation generation",
    },
    { value: "revert", name: "revert:   代码回滚,撤销某次代码提交" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],
  scopes: [
    { name: "components", description: "组件相关" },
    { name: "hooks", description: "hooks 相关" },
    { name: "utils", description: "utils 相关" },
    { name: "styles", description: "样式相关" },
    { name: "deps", description: "项目依赖" },
    { name: "auth", description: "对 auth 修改" },
    { name: "config", description: "配置相关" },
    { name: "other", description: "其他修改" },
    // 如果选择 custom.则会再让输入自定义的 scope 名字
    // 也可以不设置此项,通过把 allowCustomScopes 设置为 true 来实现
    // 反之亦然
    { name: "custom", description: "以上均不符合,需要添加新的 scope" },
  ],

  messages: {
    type: "代码提交请遵循代码提交规范~ \n选择你本次代码提交的类型:",
    scope: "\n请选择代码影响的范围 (可选):",
    // 当选择 custom scopes 时会出现以下提示
    customScope: "请填写想要添加的 scope :",
    subject: "请简要的描述下此次改动:\n",
    body: '请详细的描述下此次改动(可选).使用 "|" 来换行:\n',
    breaking: "添加非兼容性变更描述.(可选):\n",
    footer: "添加涉及的 ISSUES CLOSED(可选). E.g.: #31, #34:\n",
    confirmCommit: "变更填写完成,确定提交?",
  },
  // subjectLimit: 100,  字数提交限制;默认100

  // subjectSeparator: {string: default} type 字段后跟分隔符

  // typePrefix: {string,default:''}: type 字段前缀

  // typeSuffix: {string,default:''}: type 字段后缀

  // scopes: {Array of Strings}: 作用域列表

  // scopeOverrides: {Object where key contains a Array of String} 覆盖默认 scope 字段

  // allowCustomScopes: {boolean, default:false} 允许添加自定义 scopes

  // allowBreakingChanges: //{Array of Strings: default:none} 询问 breaking change 类型的列表

  // skipQuestions: {Array of Strings: default none}. 想要跳过的问题列表. Eg.: ['body', 'footer'].

  // skipEmptyScopes: {boolean, default false}: 当选择的 type 没有对应的 scopes 时,决定是否跳过问题步骤

  // appendBranchNameToCommitMessage: 当使用带有 cz-customizable-ghooks 的 cz-customizable 时, 可以自动的将分支名添加到 commit 中去。If you use cz-customizable with cz-customizable-ghooks, you can get the branch name automatically appended to the commit message. This is done by a commit hook on cz-customizable-ghooks. This option has been added on cz-customizable-ghooks, v1.3.0. Default value is true.

  // ticketNumberPrefix: // {string, default 'ISSUES CLOSED:'}: 自定义 footer 号码前缀

  // breakingPrefix: {string, default 'BREAKING CHANGE:'}: Set a custom prefix for the breaking change block in commit messages.

  // footerPrefix: {string, default 'ISSUES CLOSED:'}: Set a custom prefix for the footer block in commit messages. Set to empty string to remove prefix.

  // breaklineChar: {string, default '|'}: It gets replaced with \n to create the breakline in your commit message. This is supported for fields body and footer at the moment.

  // upperCaseSubject: { boolean, default false }: Capitalizes first subject letter if set to true

  // askForBreakingChangeFirst: //{ boolean, default false }: It asks for breaking change as first question when set to true
};
