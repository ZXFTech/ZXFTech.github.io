/**
 *
 * @param {number[]} nums
 * @param {number} p
 *
 * 思路: 数组前缀和,同余定理
 */

const minSubArray = (nums, p) => {
  let k = 0;
  for (const i of nums) {
    k = (i + k) % p;
  }
  if (k === 0) {
    return [];
  }

  let modMap = new Map();
  modMap.set(0, -1);
  let mod = 0,
    arrLength = nums.length;
  let length = arrLength;

  for (let i = 0; i < nums.length; i++) {
    mod = (nums[i] + mod) % p;
    // 防止有负数，所以加k
    let target = (mod - k + p) % p;
    if (modMap.has(target)) {
      length = Math.min(length, i - modMap.get(target));
    }
    modMap.set(mod, i);
  }

  return length == arrLength ? -1 : length;
};

// console.log("length:", minSubArray([1, 2, 3], 3));
// console.log("length:", minSubArray([1, 2, 3], 7));
// console.log("length:", minSubArray([6, 1, 4, 2], 6));
// console.log("length:", minSubArray([6, 3, 5, 2], 9));
console.log(
  "length",
  minSubArray(
    [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2],
    148
  )
);
