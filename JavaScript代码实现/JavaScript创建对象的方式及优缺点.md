# JavaScript 创建对象的方式及优缺点

## 工厂模式

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
