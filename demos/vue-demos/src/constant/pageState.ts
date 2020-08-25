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
    ],
  },
  {
    navName: "About",
    navText: "关于",
    navUrl: "/about",
  },
];
