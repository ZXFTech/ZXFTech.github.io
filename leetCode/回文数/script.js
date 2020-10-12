var isPalindrome = function (temp) {
  if (temp < 0) {
    return false
  }
  if (temp === 0) {
    return true
  }
  if (temp % 10 === 0) {
    return false
  }
  if (temp / 10 < 1) {
    return true
  }
  let r = 0
  while (r < temp) {
    r = r * 10 + temp % 10
    temp = (temp - temp % 10) / 10
  }
  if (r == temp) { return true }
  if (r - temp * 10 < 10 && r - temp * 10 > 0) { return true }
  return false
};
console.log(isPalindrome(12345));
console.log(isPalindrome(54321));
console.log(isPalindrome(123456));
console.log(isPalindrome(654321));
console.log(isPalindrome(123321));
console.log(isPalindrome(321123));
console.log(isPalindrome(12321));
console.log(isPalindrome(32123));
console.log(isPalindrome(66666));
console.log(isPalindrome(666666));
console.log(isPalindrome(10001));