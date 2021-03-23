/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
​
  let slow = dummyHead;
  let fast = dummyHead;
​
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
​
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
​
  slow.next = slow.next.next;
​
  return dummyHead.next;
};
​
// Test cases
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
//
// const six = new ListNode(6);
// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);
//
// console.log(removeNthFromEnd(six, 1));
// console.log(removeNthFromEnd(one, 2));
// console.log(removeNthFromEnd(one, 3));
