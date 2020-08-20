export const navbarContent = [
  {
    navName:'Home',
    navText:'首页',
    navUrl:'/home',
  },
  {
    navName:'Category',
    navText:'分类',
    navUrl:'/category',
    subNav:[
      {
        navName:'ByTag',
        navText:'按标签',
        navUrl:'/tags'
      },
      {
        navName:'BySeries',
        navText:'按系列',
        navUrl:'/series'
      },
      {
        navName:'ByDate',
        navText:'按日期',
        navUrl:'/date',
        subNav:[
          {
            navName:'ByTag',
            navText:'按标签',
            navUrl:'/tags'
          },
          {
            navName:'BySeries',
            navText:'按系列',
            navUrl:'/series'
          },
          {
            navName:'ByDate',
            navText:'按日期',
            navUrl:'/date'
          }
        ]
      }
    ]
  },
  {
    navName:'About',
    navText:'关于',
    navUrl:'/about'
  }
]

export const sideBarContent = [
  {
    sideName:'home',
    sideText:'首页',
    sideUrl:'/home'
  },
  {
    sideName:'category1',
    sideText:'分类1',
    sideUrl:'/category'
  },
  {
    sideName:'home',
    sideText:'首页',
    sideUrl:'/home'
  },
  {
    sideName:'home',
    sideText:'首页',
    sideUrl:'/home'
  },
  {
    sideName:'home',
    sideText:'首页',
    sideUrl:'/home'
  }
]