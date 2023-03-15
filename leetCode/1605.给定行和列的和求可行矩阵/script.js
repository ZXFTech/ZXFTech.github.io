/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let x = 0;
  let y = 0;

  let n = rowSum.length;
  let m = colSum.length;
  const targetArray = new Array(n).fill(0).map(() => new Array(m).fill(0));
  while (x < n && y < m) {
    const ele = Math.min(rowSum[x], colSum[y]);
    targetArray[x][y] = ele;
    rowSum[x] -= ele;
    colSum[y] -= ele;
    rowSum[x] === 0 ? x++ : y++;
  }
  return targetArray;
};

restoreMatrix([5, 7, 10], [8, 6, 8]);
