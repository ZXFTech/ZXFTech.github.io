# JavaScript 实现 new

## new 的定义

> new 运算符创建一个用户定义的对象类型的示例或具有狗凹函数的内置对象的实例。

```JavaScript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"

```

## new 的实现

当使用 new 关键字后，会进行以下操作：

> 1.创建一个继承自其构造函数的 prototype 的新对象  
> 2.使用指定的参数执行构造函数，并将 this 绑定到新创建的对象  
> 3.返回创建的实例，如果构造函数返回了一个对象，则返回该对象。如果构造函数没有显式的返回一个对象，则返回步骤 1 创建的对象。
