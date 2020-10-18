/**
 * 思路
 * 问题关键：1.找到中位数所在索引，返回所在值，奇数长度为一个，偶数长度为两个值之和的一半
 *          2.快速合并两个数组
 * 解决方案：使用两个指针分别指向两个数组当前元素，起始为两数组开头元素，遍历到总长度一半即可停止
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length
  const odd = length % 2 ? true : false
  let p1 = p2 = 0
  let midNum = 0
  let mid = 0
  if (odd) {
    if (nums1.length === 0) {
      return nums2[(length - 1) / 2]
    }
    if (nums2.length === 0) {
      return nums1[(length - 1) / 2]
    }
    mid = (length + 1) / 2
    while (nums1[p1] !== undefined && nums2[p2] != undefined) {
      if (nums1[p1] < nums2[p2]) {
        p1++
        if (p1 + p2 === mid) {
          return nums1[p1 - 1]
        }
      }
      else {
        p2++
        if (p1 + p2 === mid) {
          return nums2[p2 - 1]
        }
      }
    }

    if (nums1[p1] !== undefined) {
      return nums1[mid - p2 - 1]
    }

    if (nums2[p2] !== undefined) {
      return nums2[mid - p1 - 1]
    }
  } else {
    mid = length / 2
    let added = false

    if (nums1.length === 0) {
      return (nums2[mid - 1] + nums2[mid]) / 2
    }
    if (nums2.length === 0) {
      return (nums1[mid - 1] + nums1[mid]) / 2
    }

    while (nums1[p1] !== undefined && nums2[p2] !== undefined) {
      if (nums1[p1] < nums2[p2]) {
        p1++
        if ((p1 + p2) === mid || (p1 + p2 === mid + 1)) {
          midNum += nums1[p1 - 1]
          if (added) {
            return midNum / 2
          }
          added = true
        }
      }
      else {
        p2++
        if ((p1 + p2) === mid || p1 + p2 === mid + 1) {
          midNum += nums2[p2 - 1]
          if (added) {
            return midNum / 2
          }
          added = true
        }
      }
    }

    if (nums1[p1] !== undefined) {
      if (added) {
        return (midNum + nums1[mid - p2]) / 2
      }
      return (nums1[mid - p2 - 1] + nums1[mid - p2]) / 2
    }

    if (nums2[p2] !== undefined) {
      if (added) {
        return (midNum + nums2[mid - p1]) / 2
      }
      return (nums2[mid - p1 - 1] + nums2[mid - p1]) / 2
    }
  }
};

const a1 = [0]

const a2 = []

console.log(findMedianSortedArrays(a1, a2));