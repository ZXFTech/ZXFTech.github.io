const a1 = {
  name: "a1",
};

console.log("a1.prototype", a1.prototype);
console.log("a1.__proto__", a1.__proto__);

function Cat() {
  this.name = "Mimi";
  this.sound = "Miao";
}

const cat1 = new Cat();
console.log("cat1.prototype", cat1.prototype);
console.log("cat1.__proto__", cat1.__proto__);

console.log("Object instanceof Function", Object instanceof Function);
console.log("Function instanceof Object", Function instanceof Object);
// // 节流思路 判断当前时间和时间间隔
// const throttle = (callback, interval) => {
//   let last = Date.now();
//   return function () {
//     let now = Date.now();
//     if (now - last > interval) {
//       console.log("this", this);
//       callback.apply(this, arguments);
//       last = now;
//     }
//   };
// };

// // 防抖思路 设置定时器，定时器存在则重置定时器，不存在则设置定时器
// const debounce = (callback, delay) => {
//   const timer = Symbol("timer");
//   callback[timer] = null;
//   return function () {
//     if (callback[timer]) {
//       clearTimeout(callback[timer]);
//       callback[timer] = null;
//     }
//     callback[timer] = setTimeout(() => {
//       callback(arguments);
//     }, delay);
//   };
// };

// var scope = "window";
// var obj = {
//   scope: "obj",
// };

// // document.getElementById("button1").onclick = throttle(logThis, 1000);
// // document.getElementById("button2").onclick = debounce(logThis, 1000);

// Function.prototype.myCall = function (thisArg, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not a function");
//   }

//   let that = thisArg || window;
//   let fnToCall = Symbol("fnToCall");
//   that[fnToCall] = this;
//   result = that[fnToCall](...args);
//   delete that[fnToCall];
//   return result;
// };

// Function.prototype.myBind = function (thisArg, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not a function");
//   }

//   let slice = Array.prototype.slice;
//   let fnToCall = this;
//   let baseArgs = slice.call(args || []);
//   function toBind() {
//     const allArgs = baseArgs.concat(slice.call(arguments));
//     fnToCall.apply(this instanceof fnToCall ? fnToCall : thisArg, allArgs);
//   }
//   return toBind;
// };

// function fun() {
//   console.log("arguments", ...arguments);
//   console.log("scope", this.scope);
//   console.log("this", this);
// }

// fun(); // window 当不指定第一个参数时，this的值将会绑定为全局对象
// fun.call(obj, "arg1", "arg2"); // obj
// fun.myCall(obj, "arg1", "arg2");
// const bindWindow = fun.myBind(null, 123);
// const bindObj = fun.myBind(obj, 123, 234);
// bindWindow();
// bindObj();
// fun.apply(fun, [123]);
