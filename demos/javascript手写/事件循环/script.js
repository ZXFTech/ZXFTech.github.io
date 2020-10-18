console.log('start');

setTimeout(() => {
  console.log('setTimeout-  1');
}, 0)

new Promise((resolve) => {
  console.log('promise');
  setTimeout(() => {
    console.log('promise - setTimeout');
  }, 0)
  resolve()
}).then(() => {
  console.log('promise - then');
})

setTimeout(() => {
  console.log('setTimeout - 2');
}, 0)

console.log('end');