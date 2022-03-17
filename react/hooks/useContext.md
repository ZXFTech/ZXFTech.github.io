# React hooks 之 useContext

如果在一个多层级的组件树，从顶层向底层使用 props 的方式传递数据，需要将 props 层层传入中间层的组件，导致开发委会很困难。context api 就是为了解决这种情况。

## 创建 context

在最上层组件中使用`createContext`来创建一个 context

```JavaScript
export const userContext = React.createContext('defaultValue')
```

创建 context 对象后，当有订阅了这个 context 的组件渲染时，该组件会从李子申最贱的那个匹配的 provider 中读取当前 context 的值
只用当组件所处的树中没有匹配到，起 defaultValue 参数才会生效。注意：传入 undefined 给 provider 的 value 时，defaultValue 不会生效。

## 提供 provider

使用 Provider 包裹子节点，将 context 提供给子节点

```JavaScript
<UserContext.Provider value={'feline'}>
  <RootComponent>
</UserContext.Provider>
```

## 在子组件中调用 context

使用 Consumer 消费

```JavaScript
import {UserContext} from '../parentComponent'

function childComponent() {
  return (
    <div>
      <UserContext.Consumer>
        (user) => (
          <div>
            User context value is {user}
          </div>
        )
      </UserContext.Consumer>
    </div>
  )
}
```

## 缺陷

如果使用了多个 context，那么在提供和消费的时候就要嵌套多层 provider 和 consumer，导致可读性变差。
此时可以通过 useContext 来解决。

## useContext

创建 context 的方式不变
在子组件中使用 useContext

```JavaScript
import {UserContext,BlogContext} from '../parentComponent'

function ChildComponent() {
  const user = useContext(UserContext)
  const blog = useContext(BlogContext)
  return (
    <div>
      User Context is {user}
      Blog context is {blog}
    </div>
  )
}
```

当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

## 阻止组件更新

调用了 `useContext` 的组件总会在 context 值变化是重新渲染。如果重渲染组件的开销较大，可以通过使用 memoization 来优化。
