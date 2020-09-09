//#region 类型检查
const checkType = (target, type, errorMessage) => {
  if (typeof target !== type) {
    console.log(errorMessage);
    throw new TypeError(errorMessage)
  }
}
//#endregion

//#region call 实现
Function.prototype.myCall = function (thisArg, ...args) {
  checkType(this, "function", "myCall - target that is trying to call is not callable")  // 类型检查

  const that = thisArg || window // 修改this的指向
  const fnToCall = Symbol("fnToCall") // 通过声明Symbol属性防止覆盖原有的fn属性
  that.fnToCall = this
  const result = that.fnToCall(...args)
  delete that[fuToCall]
  return result
}
//#endregion

//#region apply 实现
Function.prototype.myApply = function (thisArg, argArray) {
  checkType(this, "function", "myCall - target that is trying to call is not callable")  // 类型检查

  const that = thisArg || window // 修改this的指向
  const fnArgs = argArray || []
  const fnToApply = Symbol("fnToCall") // 通过声明Symbol属性防止覆盖原有的fn属性
  that.fnToApply = this
  const result = that.fnToApply(...fnArgs)
  delete that[fnToApply]
  return result
}
//#endregion

//#region bind 实现
Function.prototype.myBind = function (thisArg, ...args) {
  checkType(this, "function", "myBind - target that is trying to bind is not callable")

  const slice = Array.prototype.slice

  const fnToBind = this
  const baseArgs = slice.call(args)
  console.log(baseArgs);
  const boundFn = function () {
    const allArgs = baseArgs.concat(slice.call(arguments))
    fnToBind.apply(this instanceof fnToBind ? fnToBind : thisArg, allArgs)
  }

  boundFn.prototype = Object.create(fnToBind.prototype)

  return boundFn
}
//#endregion

var scope = "window"
var obj = {
  scope: "obj"
}

function fun() {
  console.log("arguments", ...arguments)
  console.log("scope", this.scope)
}

// fun.myCall() // arguments scope window
// fun.myCall(obj, 'arg1', 'arg2') // arguments arg1 arg2 scope obj

// fun.myApply() // arguments scope window
// fun.myApply(obj, ['arg1', 'arg2']) // arguments arg1 arg2 scope obj

// const boundWindow = fun.myBind()
// const boundObj = fun.myBind(obj, 'arg1', 'arg2')
// boundWindow() // arguments scope window
// boundObj()  // arguments arg1 arg2 scope obj