/**
 * @param {string} s
 * @return {number}
 * 思路：判断是否为-，然后从前向后遍历，依次乘10递增，直到查找到非数字，然后判断是否超出界限
 */
var myAtoi = function (s) {
  if (!s.length) return 0
  let negative = false
  let index = 0
  let charged = false
  const length = s.length
  let num = 0

  while (s[index] === ' ' && index < length) {
    index++
  }

  if (s[index] === '-') {
    negative === true
    index++
  }

  while (index < length) {
    if (s[index] * 1) {
      num = num * 10 + s[index]
    } else {
      break
    }
    index++
    if (s[index] === ' ' || s[index] * 1) {
      break
    }
  }

  return negative ? -num : num
};

const a = '    -105    '

console.log(typeof myAtoi(a));