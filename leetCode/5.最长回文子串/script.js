/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  let startIndex = 0
  let maxLength = 0
  for (let i = 0; i <= s.length - maxLength; i++) {
    for (let j = s.length - 1; j >= i + maxLength; j--) {
      let ci = i
      let cj = j
      while (cj - ci >= 1) {
        if (s[ci] === s[cj]) {
          ci++
          cj--
        }
        else {
          break
        }
      }

      if (cj < 1 + ci) {
        if (j + 1 === s.length && !maxLength) {
          return s.substring(i, j + 1)
        }
        if ((j - i + 1) > maxLength) {
          startIndex = i
          maxLength = (j - i + 1)
        }
        break
      }
    }
  }
  return s.substring(startIndex, startIndex + maxLength)
};
console.log(longestPalindrome("222020221"));
const a = 'aaa'
let b = ''
console.time('1')
for (let index = 0; index < 10000; index++) {
  b = a[1]
}
console.timeEnd('1')

console.time('2')
for (let index = 0; index < 10000; index++) {
  b = a.charAt(1)
}
console.timeEnd('2')

