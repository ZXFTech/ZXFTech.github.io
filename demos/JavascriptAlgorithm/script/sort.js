bubbleSort = (array) => {
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

const sortArray1 = [3, 2, 6, 5, 1, 4, 9, 2, 5, 5, 3, 2, 7, 4, 5, 6, 7, 3, 5, 6, 5, 7, 1, 8]
const sortArray2 = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(sortArray1);
console.time('sort1')
const sorted1 = cocktailSort(sortArray1)
// sortArray1.cocktail_sort()
console.timeEnd('sort1')
console.log(sorted1);
console.log(sortArray2);
console.time('sort2')
const sorted2 = cocktailSort(sortArray2)
// const sorted2 = sortArray2.cocktail_sort()
console.timeEnd('sort2')
console.log(sorted2);