/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  if (!head) {
    return null;
  }

  let reversedList = new ListNode(head.val, null);

  let fast = head.next;

  while (fast !== null) {
    reversedList = new ListNode(fast.val, reversedList);

    fast = fast.next;
  }

  return reversedList;
};

// Test cases
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
//
// const six = new ListNode(6);
// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);
//
// console.log(reverseList(one));
