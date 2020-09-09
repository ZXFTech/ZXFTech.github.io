# JavaScript 手写防抖函数和节流函数

#### [手写示例](../demos/javascript手写/防抖和节流/index.html)

## 防抖函数

### 概念

> 在频繁触发某一任务的情况下，只有当触发任务的时间间隔超过指定间隔时间时，任务才会执行。
> 例如，在坐电梯时，电梯在有人进来后 10 秒后关门，如果在这十秒内又有人进来，那么电梯会再重新等待 10 秒后关门。
> 应用场景:  
> 1.输入框联想提示，通过添加防抖函数来减少请求次数，即规定用户输入后一定时间再发送请求。  
> 2.判断滚动条是否滑动到底部，滚动条滚动时会频繁触发滚动函数，所以没有必要每次触发都进行判定，可以利用防抖函数进行约束，即滚动条滚动后经过一定时间后在进行判断。

### 防抖函数实现

```JavaScript
// 防抖
const debounce = (callback, delay) => {
  const timer = Symbol("timer")
  callback.timer = null
  return function () {
    const that = this
    if (callback.timer) {
      clearTimeout(callback.timer)
      callback.timer = null
    }
    callback.timer = setTimeout(() => {
      callback.apply(that, arguments)
    }, delay);
  }
}

const clickBox = document.getElementById("clickBox")

clickBox.addEventListener("click", e => {
  debounceClick()
})

const logClick = () => { console.log("click"); }
const debounceClick = debounce(logClick, 500)
```

## 节流函数

### 概念

> 给定一个时间周期，在每一个时间周期内，即使触发多次函数，也只会执行一次。
> 例如游戏中的帧数设置，我们可以通过节流函数来设置一秒显示多少帧。
> 应用场景:  
> 1.提交类按钮，如果用户频繁点击提交按钮，每次都响应提交的话，会增加服务器压力，通过加上节流函数，则一定时间内只会进行一次提交，会降低请求的频率，减少压力。  
> 2.需要限制响应频率的地方都可以使用节流

### 实现

```JavaScript
const throttle = (callback, interval) => {
  let last = Date.now()
  return function () {
    let now = Date.now()
    if (now - last >= interval) {
      callback.apply(this, arguments)
      last = now
    }
  }
}
```
