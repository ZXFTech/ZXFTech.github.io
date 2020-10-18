
function ListNode(num, next) {
  this.val = (num === undefined ? 0 : num)
  this.next = (next === undefined ? null : next)
}

/**
 * 思路1：
 * 问题关键：传入的是链表头head，和n，如何知道当前链表元素为链表的倒数第n个节点？
 * 解决方案：遍历链表，将链表每个节点放入数组中，然后找到要删除节点，替换为后续节点
 */

var removeNthFromEnd = function (head, n) {
  const listArray = [head]
  let length = 1
  let nextList = head.next
  while (nextList) {
    listArray.push(nextList)
    length++
    nextList = nextList.next
  }
  if (length === 1) {
    return null
  }
  if (n === length) {
    return listArray[1]
  }
  listArray[length - n - 1].next = (listArray[length - n + 1] === undefined ? null : listArray[length - n + 1])
  return head
}

const createListArray = (array) => {
  let head = new ListNode(array[array.length - 1])
  for (let i = array.length - 2; i >= 0; i--) {
    const node = new ListNode(array[i])
    node.next = head
    head = node
  }
  return head
}
const head = createListArray([1, 2, 3, 4, 5])
console.log(removeNthFromEnd2(head, 5));