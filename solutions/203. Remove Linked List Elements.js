/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  if (!head) {
    return null;
  }

  if (head.next === null && head.val === val) {
    return null;
  }

  let newHead = head;

  while (head !== null && head.val === val) {
    newHead = head.next;
    head = head.next;
  }

  if (head === null) {
    return null;
  }

  let prevNode = newHead;

  let iterator = newHead.next;

  while (iterator !== null) {
    if (iterator.val === val) {
      prevNode.next = iterator.next;
    } else {
      prevNode = iterator;
    }

    iterator = iterator.next;
  }

  return newHead;
};

// Test cases
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
//
// const six = new ListNode(6);
// const five = new ListNode(5, six);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);
//
// console.log(removeElements(null, null));
// console.log(removeElements(six, 0));
// console.log(removeElements(one, 6));
