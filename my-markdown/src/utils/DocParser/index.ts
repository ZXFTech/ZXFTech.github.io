interface ParserConfig {
  name: string;
}

function DocParser({ name }: ParserConfig) {
  // 标题正则表达式
  this.titleReg = /^(#{1,6})(\s+)(.+)(\s*)$/;

  const titleReplaceFunc = (
    match: string,
    titleStr: string,
    spaceStr: string,
    contentStr: string
  ) => {
    const index = titleStr.length;
    return `<h${index}>${contentStr}</h${index}>`;
  };

  const replaceTitle = (content: string) => {
    return content.replaceAll(titleReg, titleReplaceFunc);
  };
}

export default DocParser;
