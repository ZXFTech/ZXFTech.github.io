//#region 防抖函数
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
//#endregion

//#region 
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
//#endregion

const noDebounceBox = document.getElementById("noDebounceBox")
const debounceBox = document.getElementById("debounceBox")
const noThrottleBox = document.getElementById("noThrottleBox")
const throttleBox = document.getElementById("throttleBox")

const logClick = (box) => { console.log(box, "click"); }
const debounceClick = debounce(logClick, 500)
const throttleClick = throttle(logClick, 2000)

noDebounceBox.addEventListener("click", e => {
  logClick(e.target.id)
})
debounceBox.addEventListener("click", e => {
  debounceClick(e.target.id)
})
noThrottleBox.addEventListener("click", e => {
  const date = new Date()
  const dateNow = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds()
  logClick(e.target.id + " " + dateNow)
})
throttleBox.addEventListener("click", e => {
  const date = new Date()
  const dateNow = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds()
  throttleClick(e.target.id + " " + dateNow)
})