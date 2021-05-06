/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  class Heap {
    constructor() {
      this.arr = [];
    }
​
    parent(i) {
      return Math.floor((i - 1) / 2)
    }
​
    leftChild(i) {
      let left = 2 * i + 1;
      if (left < this.arr.length) return left;
      return false
    }
​
    rightChild(i) {
      let right = 2 * i + 2;
      if (right < this.arr.length) return right;
      return false
    }
​
    insert(item) {
      this.arr.push(item);
      this.heapifyUp();
    }
​
    remove() {
      if (this.arr.length) {
        let item = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1]
        this.arr.pop();
        this.heapifyDown();
        return item;
      } else return false;
​
    }
​
    hasParent(i) {
      if (i > 0 && i < this.arr.length) {
        return true;
      }
      return false;
    }
​
    swap(left, right) {
      let item = this.arr[left];
      this.arr[left] = this.arr[right]
      this.arr[right] = item;
    }
​
    heapifyUp() {
      let index = this.arr.length - 1;
      while (this.hasParent(index) && this.arr[index][0] < this.arr[this.parent(index)][0]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
​
    }
​
    heapifyDown() {
      let index = 0;
      while (this.leftChild(index)) {
        let smallChildIndex = this.leftChild(index);
        if (this.rightChild(index)) {
          if (this.arr[this.rightChild(index)][0] < this.arr[this.leftChild(index)][0]) {
            smallChildIndex = this.rightChild(index)
          }
        }
​
        if (this.arr[index][0] < this.arr[smallChildIndex][0]) {
          break;
        } else this.swap(index, smallChildIndex)
        index = smallChildIndex;
      }
    }
  }
​
  const heap = new Heap();
  const kClosestPoints = []
​
  const calcDistance = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
​
  points.forEach(([x, y], index) => {
    heap.insert([calcDistance(x, y), index])
  })
​
​
  for (let i = 0; i < k; i++) {
    let item = heap.remove();
    kClosestPoints.push(points[item[1]])
  }
​
  return kClosestPoints;
};
// Test cases
// console.log(kClosest([[1, 3], [-2, 2]], 1)); // [[-2,2]]
// console.log(kClosest(
//   [
//     [68, 97],
//     [34, -84],
//     [60, 100],
//     [2, 31],
//     [-27, -38],
//     [-73, -74],
//     [-55, -39],
//     [62, 91],
//     [62, 92],
//     [-57, -67]
//   ],
//   5)
// ); // [[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]
​
