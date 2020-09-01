export interface NavbarContent {
  navName: string;
  navText: string;
  navUrl: string;
  subNav?: Array<NavbarContent>;
}

export const navbarContentList: Array<NavbarContent> = [
  {
    navName: "Home",
    navText: "首页",
    navUrl: "/home",
  },
  {
    navName: "Components",
    navText: "组件",
    navUrl: "/components",
    subNav: [
      {
        navName: "Navbars",
        navText: "导航栏",
        navUrl: "/navbars",
      },
      {
        navName: "Blogs",
        navText: "博客",
        navUrl: "/blogs",
      },
    ],
  },
  {
    navName: "About",
    navText: "关于",
    navUrl: "/about",
  },
];

export interface BlogComment {
  author: string;
  date: string;
  content: string;
  likes: number;
  reply?: Array<BlogComment>;
}

export const blogCommentList = [
  {
    author: "feline",
    date: "2020-04-07",
    content: "第一条评论测试",
    likes: 666,
    reply: [
      {
        author: "feline",
        date: "2020-04-07",
        content: "第一条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第二条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第三条回复测试",
        likes: 666,
      },
    ],
  },
  {
    author: "feline",
    date: "2020-04-07",
    content: "第一条评论测试",
    likes: 666,
    reply: [
      {
        author: "feline",
        date: "2020-04-07",
        content: "第一条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第二条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第三条回复测试",
        likes: 666,
      },
    ],
  },
  {
    author: "feline",
    date: "2020-04-07",
    content: "第一条评论测试",
    likes: 666,
    reply: [
      {
        author: "feline",
        date: "2020-04-07",
        content: "第一条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第二条回复测试",
        likes: 666,
      },
      {
        author: "feline",
        date: "2020-04-07",
        content: "第三条回复测试",
        likes: 666,
      },
    ],
  },
];

export interface BlogContent {
  title: string;
  createDate: string;
  updateDate: string;
  author: string;
  content: string;
  likes: number;
  tags: Array<string>;
  series: string;
  comments?: Array<BlogComment>;
  imgPath?: string;
}

export const blogContentList: Array<BlogContent> = [
  {
    title: "博客题目1",
    createDate: "2020-04-07",
    updateDate: "2020-04-07",
    author: "feline",
    content: `Lorem ipsum dolor sit amet, prompta appareat posidonium sit in. Mutat choro temporibus ut pri. At quodsi fastidii vel. Nam dolores verterem accusamus in, ut dicta legere ius. Eum id etiam facilis.

Unum probo ne has. Veri maiestatis at eos, eam vero brute concludaturque ut. Usu ex salutandi maiestatis, vix ei feugait philosophia. An illum definiebas vim, an etiam essent has. Ad ius aperiri lucilius.

An per dicam vidisse indoctum, sea ex numquam accusamus, tacimates assueverit in nam. Et per consequat similique, eam postea conceptam signiferumque in, sit labore adipisci te. Tation apeirian ut qui, vix aliquip alterum scripserit ne, laoreet accusam id his. Et quodsi cetero definitiones per. Pro vero clita iracundia in, in duo scripta omnesque. In dolore fabulas liberavisse nam.

Eos singulis necessitatibus ex. Ea pri suscipit inciderint. Usu enim noluisse an, eu his nonumy epicuri insolens. Sonet nonumes efficiantur in pro, eros aperiam mei id, eum persecuti consetetur an. Velit movet nominati vim no, mundi scribentur ullamcorper ad nec.

Cum ne denique albucius. Ei nonumy vulputate nam, mea commodo feugait ad. At pri doming fuisset. Vim ei discere perpetua, possim accusam voluptaria eu vel, cum ex libris gubergren.`,
    likes: 66,
    tags: ["JavaScript", "vuejs", "css"],
    series: "blog",
    imgPath: "blog-img.jpg",
  },
  {
    title: "博客题目2",
    createDate: "2020-04-07",
    updateDate: "2020-04-07",
    author: "feline",
    content: `Lorem ipsum dolor sit amet, prompta appareat posidonium sit in. Mutat choro temporibus ut pri. At quodsi fastidii vel. Nam dolores verterem accusamus in, ut dicta legere ius. Eum id etiam facilis.

Unum probo ne has. Veri maiestatis at eos, eam vero brute concludaturque ut. Usu ex salutandi maiestatis, vix ei feugait philosophia. An illum definiebas vim, an etiam essent has. Ad ius aperiri lucilius.

An per dicam vidisse indoctum, sea ex numquam accusamus, tacimates assueverit in nam. Et per consequat similique, eam postea conceptam signiferumque in, sit labore adipisci te. Tation apeirian ut qui, vix aliquip alterum scripserit ne, laoreet accusam id his. Et quodsi cetero definitiones per. Pro vero clita iracundia in, in duo scripta omnesque. In dolore fabulas liberavisse nam.

Eos singulis necessitatibus ex. Ea pri suscipit inciderint. Usu enim noluisse an, eu his nonumy epicuri insolens. Sonet nonumes efficiantur in pro, eros aperiam mei id, eum persecuti consetetur an. Velit movet nominati vim no, mundi scribentur ullamcorper ad nec.

Cum ne denique albucius. Ei nonumy vulputate nam, mea commodo feugait ad. At pri doming fuisset. Vim ei discere perpetua, possim accusam voluptaria eu vel, cum ex libris gubergren.`,
    likes: 66,
    tags: ["JavaScript", "vuejs", "css"],
    series: "blog",
    imgPath: "blog-img.jpg",
  },
  {
    title: "博客题目3",
    createDate: "2020-04-07",
    updateDate: "2020-04-07",
    author: "feline",
    content: `Lorem ipsum dolor sit amet, prompta appareat posidonium sit in. Mutat choro temporibus ut pri. At quodsi fastidii vel. Nam dolores verterem accusamus in, ut dicta legere ius. Eum id etiam facilis.

Unum probo ne has. Veri maiestatis at eos, eam vero brute concludaturque ut. Usu ex salutandi maiestatis, vix ei feugait philosophia. An illum definiebas vim, an etiam essent has. Ad ius aperiri lucilius.

An per dicam vidisse indoctum, sea ex numquam accusamus, tacimates assueverit in nam. Et per consequat similique, eam postea conceptam signiferumque in, sit labore adipisci te. Tation apeirian ut qui, vix aliquip alterum scripserit ne, laoreet accusam id his. Et quodsi cetero definitiones per. Pro vero clita iracundia in, in duo scripta omnesque. In dolore fabulas liberavisse nam.

Eos singulis necessitatibus ex. Ea pri suscipit inciderint. Usu enim noluisse an, eu his nonumy epicuri insolens. Sonet nonumes efficiantur in pro, eros aperiam mei id, eum persecuti consetetur an. Velit movet nominati vim no, mundi scribentur ullamcorper ad nec.

Cum ne denique albucius. Ei nonumy vulputate nam, mea commodo feugait ad. At pri doming fuisset. Vim ei discere perpetua, possim accusam voluptaria eu vel, cum ex libris gubergren.`,
    likes: 66,
    tags: ["JavaScript", "vuejs", "css"],
    series: "blog",
    imgPath: "blog-img.jpg",
  },
];

export interface SocialContact {
  way: string;
  url: string;
}

export interface UserStatus {
  name: string;
  imgPath: string;
  occupation: string;
  introduction: string;
  contact: SocialContact[];
}

export const userStatus: UserStatus = {
  name: "feline",
  imgPath: "feline.jpg",
  occupation: "Front End",
  introduction: "Hello,world!",
  contact: [
    {
      way: "github",
      url: "http://zxftech.github.io/",
    },
    {
      way: "QQ",
      url: "http://zxftech.github.io/",
    },
  ],
};
