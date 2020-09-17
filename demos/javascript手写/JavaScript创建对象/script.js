
// // 工厂模式
// function createPerson(name) {
//   const o = new Object()
//   o.name = name
//   o.getName = function () {
//     console.log(this.name)
//   }

//   return o
// }

// const feline = createPerson("feline")

// console.log(feline.name)
// feline.getName()

// // 构造函数模式
// function Person(name) {
//   this.name = name
//   this.getName = function () {
//     console.log(this.name)
//   }
// }

// // 构造函数模式优化
// function Person(name) {
//   this.name = name
//   this.getName = getName
// }

// function getName() {
//   console.log(this.name)
// }

// // 原型 prototype 模式
// function Person(name) {

// }

// Person.prototype.name = 'feline'
// Person.prototype.getName = function () {
//   console.log(this.name);
// }

// // 原型 prototype 模式优化
// function Person(name) {

// }

// Person.prototype = {
//   constructor: Person,
//   name: 'feline',
//   getName: function () {
//     console.log(this.name);
//   }
// }

// // 组合模式
// function Person(name) {
//   this.name = name
// }

// Person.prototype = {
//   constructor: Person,
//   getName: function () {
//     console.log(this.name);
//   }
// }

// // 动态原型模式
// function Person(name) {
//   this.name = name
//   if (typeof this.getName !== "function") {
//     Person.prototype = {
//       constructor: Person,
//       getName: function () {
//         console.log(this.name);
//       }
//     }

//     return new Person(name)
//   }
// }

// const p1 = new Person('1')
// const p2 = new Person('2')
// console.log(p1 instanceof Person);
// console.log(p2 instanceof Person);
// p2.getName()
// p1.getName()

// // 寄生构造函数模式
// function Person(name) {
//   var o = new Object()
//   o.name = name
//   o.getName = function () {
//     console.log(this.name);
//   }
// }

// // 稳妥构造函数模式
// function person(name) {
//   var o = new Object()
//   o.sayName = function () {
//     console.log(name);
//   }
//   return o
// }

// 构造函数 原型对象 实例
// const a1 = {
//   name: "a1"
// }

// const a2 = {
//   name: "a2"
// }

// // 通过Object.create(obj)创建的对象，其原型会指向obj
// // 这里b的原型指向a，即可认为b"继承"自a
// const b = Object.create(a1)
// // 此时的原型链为
// // b --> a1 --> Object.prototype --> null
// console.log(b.name)  // a1
// console.log(b.__proto__ === a1);  // true


// const c = Object.create(b)
// // 此时的原型链为
// // c --> b --> a1 --> Object.prototype --> null
// // 打印c
// console.log(c); // {}
// // c继承自b，访问c.name时，由于c中没有name属性，所以会根据原型链进行查找，直到获取a1.name的值
// console.log(c.name);  // a1
// console.log(c.__proto__ === b);  // true
// console.log(c.__proto__.__proto__ === a1);  // true

// // 手动更改c的原型为a2
// // 更改后再次调用c.name的值，同理，会获取到a2.name的值
// c.__proto__ == a2
// // 打印c
// console.log(c);  // {}
// console.log(c.name);  // a2
// console.log(c.__proto__ === a2);  // true
// // 此时的原型链为
// // c --> a2 --> Object.prototype --> null

// // 如果在c中更改name的值，就相当于Java中的子类重写父类，再次调用c.name，此时c中已有name属性，所以返回c.name
// c.name = "c"
// // 打印c
// console.log(c); // {name:"c"}
// console.log(c.name); // c
// console.log(c.__proto__ === a2); // true 原型不变
// console.log(a2.name); // a2

// console.log(Object.__proto__.constructor === Function);
// console.log(Function.__proto__.constructor === Function);
// console.log(Function.prototype === Object.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(typeof Function.prototype);
// console.log(Function.__proto__.__proto__ === Object.prototype);
// console.log(Object.__proto__.__proto__ === Object.prototype);

// a = new Object()
// a.__proto__ = {}
// e = Object.create(a)
// b = function () {
//   this.name = "feline"
//   this.age = 25
// }
// console.log(b.prototype);
// c = new b()
// // console.log(a);
// console.log(b);
// console.log(c);
// // console.log(e);
// // console.log(a.__proto__);
// console.log(b.__proto__ === Function.prototype);
// console.log(c.__proto__ === b.prototype);
// console.log(e.__proto__);

// console.log(a.prototype.bind === a.bind);
// console.log(a.bind === Function.prototype.bind);
// console.log(Function.prototype.bind === Function.bind);
// 万物都是对象

// 对象都是由构造函数创建的
// 先有Object.prototype
// 由此创建了 Function.prototype和字面量对象
// Function和Object基于Function.prototype

const c = {
  myNae: "c",
  myProto: null,
  get name() {
    const name = this.myName !== undefined ? this.myName : (this.myProto !== null ? this.myProto.name : undefined)
    return name
  }
}


const b = {
  mme: "b",
  myProto: c,
  get name() {
    const name = this.myName !== undefined ? this.myName : (this.myProto !== null ? this.myProto.name : undefined)
    return name
  }
}


const a = {
  myNme: "a",
  myProto: b,
  get name() {
    const name = this.myName !== undefined ? this.myName : (this.myProto !== null ? this.myProto.name : undefined)
    return name
  }
}

console.log(a.name);