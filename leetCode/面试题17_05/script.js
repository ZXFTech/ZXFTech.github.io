/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  // 遍历数组 统计 A/B出现的次数每当二者相等时，判断方式，前缀和。记下max(i-j)？
  let sumMap = new Map();
  sumMap.set(0, -1);
  let start = 0,
    length = 0,
    sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i] >= "A" ? 1 : -1;
    if (sumMap.has(sum)) {
      const j = sumMap.get(sum);
      if (i - j > length) {
        length = i - j;
        start = j + 1;
      }
    } else {
      sumMap.set(sum, i);
    }
  }
  return array.slice(start, start + length);
};
