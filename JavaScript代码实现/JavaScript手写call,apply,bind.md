# JavaScript 手写 call,apply,bind

#### [手写示例](../demos/javascript手写/call,apply,bind/index.html) - 打开页面后按 F12 在开发者工具中查看

## 类型检查函数

```JavaScript
const checkType = (target,type,errorMessage) => {
  if (typeof target !== type) {
    console.log(errorMessage);
    throw new TypeError(errorMessage)
  }
}
```

## 手写 call

### call 用法

> function.call(thisArg,arg1,arg2,...)
> call 的调用主要做了两件事 1.改变 this 的指向 2.把参数传给调用的方法

```JavaScript
var scope = "window"
var obj = {
  scope: "obj"
}

function fun() {
  console.log("arguments", ...arguments)
  console.log("scope", this.scope)
}

fun() // arguments num 1 当不指定第一个参数时，this的值将会绑定为全局对象
fun.call(obj,'arg1','arg2') // arguments 999 666 num 2
```

### call 实现

```javascript
Function.prototype.myCall = function (thisArg, ...args) {
  checkType(
    this,
    "function",
    "myCall - target that is trying to call is not callable"
  ); // 类型检查

  const that = thisArg || window; // 修改this的指向
  const fnToCall = Symbol("fnToCall"); // 通过声明Symbol属性防止覆盖原有的fn属性
  that.fnToCall = this;
  const result = that.fnToCall(...args);
  delete that[fuToCall];
  return result;
};

var scope = "window";
var obj = {
  scope: "obj",
};

function fun() {
  console.log("arguments", ...arguments);
  console.log("scope", this.scope);
}

fun.myCall(); // arguments scope window
fun.myCall(obj, "arg1", "arg2"); // arguments arg1 arg2 scope obj
```

## 手写 apply

### apply 用法

> function.apply(thisArg,[argsArray])
> apply 用法和 call 相类似，相较于 call 是分开传递指定的参数，apply 则是用一个参数数组来传递.

### apply 实现

apply 实现步骤与 call 基本相同，只需更改一下参数形式即可

```javascript
Function.prototype.myApply = function (thisArg, argArray) {
  checkType(
    this,
    "function",
    "myCall - target that is trying to call is not callable"
  ); // 类型检查

  const that = thisArg || window; // 修改this的指向
  const fnArgs = argArray || [];
  const fnToApply = Symbol("fnToCall"); // 通过声明Symbol属性防止覆盖原有的fn属性
  that.fnToApply = this;
  const result = that.fnToApply(...fnArgs);
  delete that[fnToApply];
  return result;
};

var scope = "window";
var obj = {
  scope: "obj",
};

function fun() {
  console.log("arguments", ...arguments);
  console.log("scope", this.scope);
}

fun.myApply(); // arguments scope window
fun.myApply(obj, ["arg1", "arg2"]); // arguments arg1 arg2 scope obj
```

## 手写 bind

### bind 用法

> function.bind(thisArg[, arg1[, arg2[, ...]]])
> bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```javascript
// 创建绑定函数
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // 在全局环境下调用unboundGetX方法，输出 undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 调用boundGetX方法，输出 42

// 偏函数
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

var result2 = addThirtySeven(5);
// 37 + 5 = 42

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 ，第二个参数被忽略
```

### bind 实现

bind 相当于给 call 或 apply 放进了一个新的 function 中，每次调用这个 function 都会调用固定的 call 或 apply 方法。
bind 中也可以传递参数，这些参数也会传递给返回的函数，如示例中的偏函数。
绑定函数自动适应于使用 new 操作符去构造一个由目标函数创建的新实例。当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。不过提供的参数列表仍然会插入到构造函数调用使得参数列表之前。

```JavaScript
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

var scope = "window"
var obj = {
  scope: "obj"
}

function fun() {
  console.log("arguments", ...arguments)
  console.log("scope", this.scope)
}

const boundWindow = fun.myBind()
const boundObj = fun.myBind(obj, 'arg1', 'arg2')
boundWindow() // arguments scope window
boundObj()  // arguments arg1 arg2 scope obj
```
