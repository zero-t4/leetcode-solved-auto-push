function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
​
const compose = (...fns) => fns.reduceRight(
  (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
  value => value
);
​
const reverseList = (list) => {
  let dummyEnd = new ListNode(list.val, null);
​
  let iterator1 = list.next;
  let iterator2 = iterator1;
​
  while (iterator1 !== null) {
    iterator1 = iterator1.next;
    iterator2.next = dummyEnd;
​
    dummyEnd = iterator2;
    iterator2 = iterator1;
  }
​
  return dummyEnd;
};
​
const getStringNumber = (list) => {
  let strNumber = '';
​
  while (list !== null) {
    strNumber += list.val;
​
    list = list.next;
  }
​
  return strNumber;
}
​
const sum = ([n1, n2]) => BigInt(n1) + BigInt(n2);
​
const map = (mapper) => (array) => array.map(mapper);
​
const numberToList = (number) => {
  const strNumber = String(number).split('');
​
  let dummyEnd = new ListNode(+strNumber[strNumber.length - 1], null);
​
  for (let i = strNumber.length - 2; i >= 0; i--) {
    dummyEnd = new ListNode(+strNumber[i], dummyEnd);
  }
​
  return dummyEnd;
}
​
const getReversedStringNumberFromList = compose(getStringNumber, reverseList);
​
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => compose(
  reverseList,
  numberToList,
  sum,
  map(getReversedStringNumberFromList),
)([l1, l2]);
​
// Plan:
// 1. somehow reverse linked list 1
// 2. somehow reverse linked list 2
// 3. get numbers
// 4. sum two numbers
// 4. Split number by '' and reverse it back to ListNode
​
// Test cases
// const three_1 = new ListNode(3);
// const two_1 = new ListNode(2, three_1);
// const one_1 = new ListNode(1, two_1);
//
// const three = new ListNode(3);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);
//
// console.log(addTwoNumbers(one, one_1));
//
// const _11 = new ListNode(1);
// const _029 = new ListNode(0, _11);
// const _028 = new ListNode(0, _029);
// const _027 = new ListNode(0, _028);
// const _026 = new ListNode(0, _027);
// const _025 = new ListNode(0, _026);
// const _024 = new ListNode(0, _025);
// const _023 = new ListNode(0, _024);
// const _022 = new ListNode(0, _023);
// const _021 = new ListNode(0, _022);
// const _020 = new ListNode(0, _021);
// const _019 = new ListNode(0, _020);
// const _018 = new ListNode(0, _019);
// const _017 = new ListNode(0, _018);
// const _016 = new ListNode(0, _017);
// const _015 = new ListNode(0, _016);
// const _014 = new ListNode(0, _015);
// const _013 = new ListNode(0, _014);
// const _012 = new ListNode(0, _013);
// const _011 = new ListNode(0, _012);
// const _010 = new ListNode(0, _011);
// const _09 = new ListNode(0, _010);
// const _08 = new ListNode(0, _09);
// const _07 = new ListNode(0, _08);
// const _06 = new ListNode(0, _07);
// const _05 = new ListNode(0, _06);
// const _04 = new ListNode(0, _05);
// const _03 = new ListNode(0, _04);
// const _02 = new ListNode(0, _03);
// const _01 = new ListNode(0, _02);
// const _1 = new ListNode(1, _01);
//
// const _4 = new ListNode(4);
// const _6 = new ListNode(6, _4);
// const _5 = new ListNode(5, _6);
// console.log(addTwoNumbers(_1, _5));
​
