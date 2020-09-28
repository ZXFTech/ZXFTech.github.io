# JavaScript 创建对象的方式及优缺点

### 工厂模式

```JavaScript
function createPerson(name) {
  const o = new Object()
  o.name = name
  o.getName = () => {
    return this.name
  }

  return o
}
```

### 构造函数模式

```JavaScript
function Person(name) {
  this.name = name;
  this.getName = function(){
    console.log(this.name)
  }
}
```

### 原型模式

```JavaScript
function Person(name) {
}
Person.prototype.name = "feline"
Person.prototype.getName = function(){
  console.log(this.name)
}
```

### 原型加构造函数

```JavaScript
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  console.log(this.name)
}
```
