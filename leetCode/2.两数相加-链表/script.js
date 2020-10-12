
const createListNode = (numArray) => {
  if (!numArray && !numArray.length) {
    return null
  }

  let head = null
  let pointer = null

  while (numArray.length > 0) {
    if (head) {
      pointer.next = new ListNode(numArray.pop())
      pointer = pointer.next
    } else {
      head = pointer = new ListNode(numArray.pop())
    }
  }
  return head
}

function ListNode(num) {
  this.val = num
  this.next = null
}

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode((l1.val + l2.val) % 10)
  let decade = 0
  if ((l1.val + l2.val) >= 10) {
    decade = 1
  }
  let pointer = result
  l1 = l1.next
  l2 = l2.next
  while (l1 && l2) {
    pointer = pointer.next = new ListNode((l1.val + l2.val + decade) % 10)
    if ((l1.val + l2.val + decade) >= 10) {
      decade = 1
    } else {
      decade = 0
    }
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    pointer = pointer.next = new ListNode((l1.val + decade) % 10)
    if ((l1.val + decade) >= 10) {
      decade = 1
    } else {
      decade = 0
    }

    l1 = l1.next
  }

  while (l2) {
    pointer = pointer.next = new ListNode((l2.val + decade) % 10)
    if ((l2.val + decade) >= 10) {
      decade = 1
    } else {
      decade = 0
    }

    l2 = l2.next
  }

  if (decade) {
    pointer.next = new ListNode(1)
  }

  return result
};

const l1 = createListNode([1, 2, 3, 4])
const l2 = createListNode([2, 9, 7])

const result = addTwoNumbers(l1, l2)
console.log(result);
