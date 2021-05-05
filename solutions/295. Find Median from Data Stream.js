/**
 * initialize your data structure here.
 */
const MedianFinder = function (data = []) {
  this.data = data;
};
​
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.data.length === 0) {
    this.data.push(num);
    return;
  }
​
  let l = 0;
  let r = this.data.length;
​
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (num > this.data[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
​
  this.data.splice(l, 0, num);
};
​
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const isEven = this.data.length % 2 === 0;
​
  const mid = Math.floor(this.data.length / 2);
​
  if (isEven) {
    return (this.data[mid] + this.data[mid - 1]) / 2;
  }
​
  return this.data[mid];
};
​
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// Test cases
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
