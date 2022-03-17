# react hooks 之 useMemo/useCallback

## useMemo

把创建函数和依赖项数组作为参数传入`useMemo`,它仅会在某个依赖项改变时才重新计算 memoized 之。有助于避免在每次渲染时都进行高开销的计算。

## 创建 useMemo

```JavaScript
const memoizedValue = useMemo(()=>computeExpensiveValue(a,b),[a,b])
```

当某些之

## useCallback

把内联回调函数及依赖项数组作为参数传入`useCallback`,他将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。可用于非必要渲染的子组件。

`useCallback(fn,deps)`相当于`useMemo(()=> fn,deps)`

## 创建 useCallback

```JavaScript
const memoizedCallback = useCallback(
  ()=> {
      doSomething(a,b)
    },
    [a,b]
)
```
