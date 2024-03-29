# react hooks 之 useRef

## refs 简介

在典型的 React 数据流中，props 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。

# 何时使用 refs

下面是适合使用 refs 的情况

- 管理焦点，文本选择或媒体播放
- 触发强制动画
- 集成第三方 DOM 库

避免使用 refs 来做任何可以通过声明式实现来完成的事情。

举个例子，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。

# 创建 Ref

使用`React.createRef()`创建，并通过`ref`属性附加到 React 元素。在哦鼓噪组件时，通常将 Ref 分配给实例属性，以便可以在整个组件中引用他们。
