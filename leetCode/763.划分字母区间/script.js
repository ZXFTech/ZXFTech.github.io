/**
 * 思路：同一个字母必须出现在同一个片段，遍历找到间隔最长的同一字母为一个片段，依次递归，要注意前后有同等长度的情况
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let lengthArray = []
  let gap = 1
  let tempString = ''
  for (let i = 0; i < S.length;) {
    let j = S.length - 1
    while (j - gap >= i) {
      if (S[j] === S[i]) {
        gap = j - i + 1
        tempString = S.slice(i, gap)
        break
      }
      j--
    }
    j++
    while (j < S.length) {
      if (tempString.includes(S[j])) {
        length = j - i
      }
    }
    j - i && lengthArray.push(j - i)
    i = j
    gap = 1
    console.log(S.length);
    console.log(i);
  }

  return lengthArray
};

const str = 'bababcbada'
console.log(partitionLabels(str));