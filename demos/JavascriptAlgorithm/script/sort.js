bubbleSort = (array) => {
  if (!array.length) return
  let temp
  let stop = true
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        stop = false
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
    if (stop) {
      break
    }
  }
  return array
}

cocktailSort = (array) => {
  if (!array.length) return
  let temp
  let startIndex = 0
  let endIndex = array.length - 1
  while (startIndex < endIndex && stop) {
    for (let i = startIndex; i < endIndex; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }
    endIndex--
    for (let j = endIndex; j > startIndex; j--) {
      if (array[j] < array[j - 1]) {
        temp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = temp
      }
    }
    startIndex++
  }
  return array
}

selectionSort = (array) => {
  if (!array.length) return
  let min
  let temp
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (min != i) {
      temp = array[min]
      array[min] = array[i]
      array[i] = temp
    }
  }
  return array
}

insertionSort = (array) => {
  if (!array.length) return
  let key, j
  for (let i = 1; i < array.length; i++) {
    key = array[i]
    j = i
    while (j > 0 && array[j - 1] > key) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = key
  }
  return array
}

binaryInsertionSort = array => {
  if (!array.length) return
  let key, lowIndex, heightIndex, m
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    lowIndex = 0
    heightIndex = i - 1
    while (lowIndex <= heightIndex) {
      if (array[i] > array[m = (lowIndex + heightIndex) >> 1]) {
        lowIndex = m + 1
      } else {
        heightIndex = m - 1
      }
    }
    for (let j = i; j > lowIndex; j--) {
      array[j] = array[j-1];
    }
    array[lowIndex] = key
  }
  return array
}

const sortArray1 = [3, 2, 6, 5, 1, 4, 9, 2, 5, 5, 3, 2, 7, 4, 5, 6, 7, 3, 5, 6, 5, 7, 1, 8]
const sortArray2 = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(sortArray1);
console.time('sort1')
const sorted1 = insertionSort(sortArray1)
console.timeEnd('sort1')
console.log(sorted1);
console.time('sort2')
const sorted2 = binaryInsertionSort(sortArray1)
console.timeEnd('sort2')
console.log(sorted2);
// console.log(sortArray2);
// console.time('sort2')
// const sorted2 = binaryInsertionSort(sortArray2)
// console.timeEnd('sort2')
// console.log(sorted2);