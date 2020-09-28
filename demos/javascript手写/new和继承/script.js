// // 使用 myNew 来模拟 new 关键字
// function myNew(fun, ...args) {
//   // 创建一个继承自其构造函数的 prototype 的新对象
//   let newObj = Object.create(fun.prototype)

//   // 使用指定的参数执行构造函数，并将this绑定到新创建的对象
//   const newInstance = fun.apply(newObj, args)

//   // 返回创建的实例，如果构造函数返回了一个对象，则返回该对象。如果构造函数没有显式的返回一个对象，则返回步骤 1 创建的对象。
//   return Object.prototype.toString.call(newInstance) === "[object Object]" ? newInstance : newObj
// }

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const myNewCar = myNew(Car, 'Eagle', 'Talon TSi', 1993)
// console.log(myNewCar)
// console.log(myNewCar instanceof Car)

function Person(name) {
  this.name = name
  this.greeting = function () {
    console.log("Hi,i'm", this.name);
  }
}
function Child(name) {
  Person.call(this, name)
}

const child1 = new Child("feline")
console.log(child1.name);
console.log(child1.greeting());

const child2 = new Child("kitty")
console.log(child2.name);
console.log(child2.greeting());

console.log(child2.greeting === child1.greeting);