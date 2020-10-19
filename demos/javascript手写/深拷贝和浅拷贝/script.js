// 浅拷贝
function cloneShallow(source) {
  const target = {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

function cloneDeep1(source) {
  if (!isObject(source)) {
    return source;
  }

  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep1(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

const isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
};

console.log(Object.prototype.toString(new Array(1, 2, 3)));

// ES6 weakMap 解决递归引用
function cloneDeepWithHash(source, hash = new WeakMap()) {
  if (!isObject(source)) return source; // 如果不是对象，返回自身
  if (hash.has(source)) return hash.get(source); // 如果hash表中已存在，直接返回对应的值

  var target = Array.isArray(source) ? [] : {};

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeepWithHash(source[key], hash); // 传入hash表
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// ES5 使用数组替代 weakMap
function cloneDeepWithArray(source, uniqueList) {
  if (!isObject(source)) return source;
  if (!uniqueList) uniqueList = [];

  var target = Array.isArray(source) ? [] : {};

  var uniqueData = find(uniqueList, source);

  // 数据如果存在，则直接返回保存的数据
  if (uniqueData) {
    return uniqueData.target;
  }

  // 数据如果不存在，保存源数据，及对应的引用
  uniqueList.push({
    source: source,
    target: target,
  });

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeepWithArray(source[key], uniqueList);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// 查找数组
function find(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i];
    }
  }
  return null;
}

// 拷贝 Symbol
// 检测 Symbol 类型的方法
// 1. Object.getOwnPropertySymbols(...)
// 2. Reflect.ownKeys(...)

// 方法1
function cloneDeepWithSymbol(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  const target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  let symKeys = Object.getOwnPropertySymbols(source);
  if (symKeys.length) {
    symKeys.forEach((symKey) => {
      if (isObject(source[symKey])) {
        target[symKey] = cloneDeepWithSymbol(source[symKey], hash);
      } else {
        target[symKey] = source[symKey];
      }
    });
  }

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep4(source[key], hash);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// 方法2
function cloneDeepWithSymbol2(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  const target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  Reflect.ownKeys(source).forEach((key) => {
    if (isObject(source[key])) {
      target[key] = cloneDeepWithSymbol2(source[key], hash);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

// 循环方式
function cloneDeepByCirculation(x) {
  const root = {};

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    },
  ];

  while (loopList.length) {
    // 广度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化复制目标，key为undefined则拷贝到父元素,否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === "object") {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
}

let a = 1;
let b = 0;
b = a = 888;
console.log(a);
console.log(b);
