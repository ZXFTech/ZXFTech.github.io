import fs from 'fs'

// let p = new Promise((resolve, reject) => {
//   console.log('start');
//   resolve('abc')
// })

// p.then(res => {
//   console.log(res);
// }, err => {
//   console.log('err', err);
// })

function MyPromise(executor) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined

  self.onResolvedCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
      self.onResolvedCallbacks.forEach(fn => {
        fn()
      });
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
      self.onRejectedCallbacks.forEach(fn => {
        fn()
      });
    }
  }

  executor(resolve, reject)
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  if (self.status === 'resolved') {
    onFulfilled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
  if (self.status === 'pending') {
    self.onResolvedCallbacks.push(function () {
      onFulfilled(self.value)
    })
    self.onRejectedCallbacks.push(function () {
      onRejected(self.reason)
    })
  }
}

const np = new MyPromise((resolve, reject) => {
  console.log('start');
  setTimeout(function () {
    if (true) {
      console.log(666);
      resolve('123')
    }
    else {
      console.log(999);
      reject('345')
    }
  }, 1000)
})

np.then(res => {
  console.log(res);
}, err => {
  console.log('err', err);
})

np.then(res => {
  console.log(res);
}, err => {
  console.log('err', err);
})

function readFile(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

readFile('./name.txt').then((data) => { console.log(data); }, (err) => { console.log(err); })