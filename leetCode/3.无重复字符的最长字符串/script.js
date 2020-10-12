var lengthOfLongestSubstring = function (s) {

  const maxStr = new Set()
  const len = s.length
  let maxLength = 0
  let rightIndex = 0
  for (let i = 0; i < len; i++) {
    if (i != 0) {
      maxStr.delete(s[i - 1])
    }
    while (rightIndex < len && !maxStr.has(s[rightIndex])) {
      maxStr.add(s[rightIndex])
      rightIndex++
    }
    maxLength = maxLength > (rightIndex - i) ? maxLength : (rightIndex - i)
  }
  return maxLength
}

const s = "anviaj"
console.log(lengthOfLongestSubstring(s));