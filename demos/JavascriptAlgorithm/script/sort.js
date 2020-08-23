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
      array[j] = array[j - 1];
    }
    array[lowIndex] = key
  }
  return array
}

mergeSortRecursion = array => {
  if (!array.length) return
  if (array.length < 2) {
    return array
  }

  const middle = array.length >> 1
  const leftArray = array.slice(0, middle)
  const rightArray = array.slice(middle)
  return mergeSortMerge(mergeSortMerge(leftArray), mergeSortMerge(rightArray))
}

mergeSortMerge = (array1, array2) => {
  let mergeArray = []

  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      mergeArray.push(array1.shift())
    } else {
      mergeArray.push(array2.shift())
    }

    if (!array1.length) {
      mergeArray = mergeArray.concat(array2)
    }

    if (!array2.length) {
      mergeArray = mergeArray.concat(array1)
    }
  }
  return mergeArray
}

mergeSortIteration = array => {
  if (!array.length) return

  let leftMin, leftMax, rightMin, rightMax
  var tempArray = []

  for (let i = 1; i < array.length; i *= 2) {
    for (leftMin = 0; leftMin < array.length; leftMin += i) {
      leftMax = leftMin + i
      rightMin = leftMin + i
      rightMax = (rightMin + i) > array.length ? array.length : rightMin + i
      let mergeStep = 0
      while (leftMin < leftMax && rightMin < rightMax) {
        if (array[leftMin] <= array[rightMin]) {
          tempArray[mergeStep++] = array[leftMin++]
        } else {
          tempArray[mergeStep++] = array[rightMin++]
        }
      }

      while (leftMin < leftMax) {
        tempArray[mergeStep++] = array[leftMin++]
      }
      while (rightMin < rightMax) {
        tempArray[mergeStep++] = array[rightMin++]
      }
      console.log(mergeStep)
      for (let j = 0; j < mergeStep; j++) {
        array[leftMin - i + j] = tempArray[j]
      }
    }
  }
  return array
}

quickSortIteration = array => {
  if (!array.length) return array

  if (array.length <= 1) {
    return array
  }

  let base = array[0]
  let smallerArray = []
  let largerArray = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < base) {
      smallerArray.push(array[i])
    } else {
      largerArray.push(array[i])
    }
  }

  return [...quickSortIteration(smallerArray), base, ...quickSortIteration(largerArray)]
}

quickSortInPlace = (array, left, right) => {
  let leftIndex = typeof left === 'number' ? left : 0
  let rightIndex = typeof right === 'number' ? right : array.length - 1


  let pivotIndex = leftIndex // 这个值也可以自己选，有条件的情况下，尽量选择数组的中位数所在的index

  if (leftIndex < rightIndex) {
    pivotIndex = partition(array, leftIndex, rightIndex, pivotIndex)
    quickSortInPlace(array, leftIndex, pivotIndex - 1)
    quickSortInPlace(array, pivotIndex + 1, rightIndex)
  }
  return array
}

partition = (array, left, right, pivotIndex) => {
  let pivotValue = array[pivotIndex]
  let temp = array[right]
  array[right] = pivotValue
  array[pivotIndex] = temp
  let storeIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] <= pivotValue) {
      temp = array[storeIndex]
      array[storeIndex] = array[i]
      array[i] = temp
      storeIndex++
    }
  }
  temp = array[storeIndex]
  array[storeIndex] = array[right]
  array[right] = temp
  return storeIndex
}

shellSort = (array, step) => {
  if (!array.length) return
  let gap = 1, temp, i, j
  step = Math.floor(step) || 3
  while (gap < array.length / step) {
    gap = gap * step + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / step)) {
    for (i = gap; i < array.length; i++) {
      temp = array[i]
      for (j = i; j - gap > 0 && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp
    }
  }
  return array
}

const sortArray1 = [3, 2, 6, 5, 1, 4, 9, 2, 5, 5, 3, 2, 7, 4, 5, 6, 7, 3, 5, 6, 5, 7, 1, 8]
const sortArray2 = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(sortArray1);
console.time('sort1')
const sorted1 = shellSort(sortArray1, 3)
console.timeEnd('sort1')
console.log(sortArray1);
// console.time('sort1-2')
// const sorted2 = mergeSort(sortArray2)
// console.timeEnd('sort1-2')
// console.log(sorted2);
console.log(sortArray2);
console.time('sort2')
const sorted3 = shellSort(sortArray2, 3)
console.timeEnd('sort2')
console.log(sorted3)