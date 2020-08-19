# CSS 命名规范 - 我的命名规范

了解了一些常见的命名规范后，我也想试着自己制定一套属于自己的命名规范，借此锻炼一下自己的文档组织分类等之类的技能，也能增进对 css 的认识。

## 规范设计思路

### 1. 按照表现功能命名

> 感觉 css 的常用功能可以大致分为以下几类:  
> > 布局：决定元素或其子元素在窗口上的位置或表现模型。
> 如 margin,padding,display 等。
>
> > 样式：决定元素的自身大小，字体大小，有无边框，列表样式等。
> > 如 width,height,font-size,font-family,list-style,border等。
>
> > 颜色：决定元素的背景色，字体颜色，边框颜色等。
> > 如 background,color,border-color等。
>
> > 动画：决定元素的变形，位移，动画时间，动画延迟等。
> > 如 transform,transition,keyframe等。

### 2. 按照组件功能命名
> 使用 "_" 来进行层级划分