# JavaScript 实现继承

### 原型链继承

```JavaScript
function Parent(name) {
  this.name = name
}

Parent.prototype.greeting = function(){
  console.log("Hi,i'm "+this.name)
}

function Child() {

}

Child.prototype = new Parent("feline")
const child1 = new Child()
console.log(child1.name) // feline
console.log(child1.greeting) // Hi,i'm feline
```

### 借用构造函数(经典继承)

```JavaScript
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
```

### 组合继承 原型链和经典结合

```JavaScript
function Parent(name) {
  this.name = name
}

Parent.prototype.greeting = function() {
  console.log("Hi,i'm", this.name);
}

function Child(name) {
  Parent.call(this,name)
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child1 = new Child("feline")
```

### 寄生式继承

```JavaScript
function Parent(name) {
  this.name = name
}

function createChild(Parent) {
  const child = Object.create(Parent)
  child.greeting = function() {
    console.log("Hi,i'm", this.name);
  }
  return child
}
```

### 寄生式组合继承

```JavaScript
function Parent(name) {
  this.name = name
}
Parent.prototype.greeting = function(){
  console.log("Hi,i'm", this.name);
}
function Child(name) {
  Parent.call(this,name)
}

function F() {

}
F.prototype = Parent.prototype
Child.prototype = new F()
```

封装

```JavaScript
function clonePrototype(target) {
  const F = function(){}
  F.prototype = target.prototype
  return new F()
}

function inherit(Child,Parent) {
  Child.prototype = clonePrototype(Parent)
  Child.prototype.constructor = Child
}

function Parent(name) {
  this.name = name
}
Parent.prototype.greeting = function() {
  console.log("Hi,i'm", this.name);
}

function Child(name) {
  Parent.call(this,name)
}

inherit(Child,Parent)
```
