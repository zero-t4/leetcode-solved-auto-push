class MinHeap {
    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }
​
    getMin () {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }
​
    isEmpty() {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap.length === 1;
    }
    
    insert (node) {
        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)
​
        /* Finding the correct position for the new node */
​
        if (this.heap.length > 1) {
            let current = this.heap.length - 1
​
            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            // current = [];
            while (current > 1 && this.heap[Math.floor(current/2)][0] > this.heap[current][0]) {
​
                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
  
  
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]
​
        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)
​
            if (this.heap.length === 3) {
                if (this.heap[1][0] > this.heap[2][0]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }
​
            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1
​
            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current][0] > this.heap[leftChildIndex][0] ||
                        this.heap[current][0] > this.heap[rightChildIndex][0])) {
                if (this.heap[leftChildIndex][0] < this.heap[rightChildIndex][0]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }
​
                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }
​
        /* If there are only two elements in the array, we directly splice out the first element */
​
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }
​
        return smallest
    }
}
​
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const minHeap = new MinHeap();
  // const start = 0, 0
  // end = heights[0] - 1, heights.length - 1
  const m = heights[0].length - 1;
  const n = heights.length - 1;
  
  const pathEfforts = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => Infinity));
  
  pathEfforts[0][0] = 0;
  
  minHeap.insert([
    0, // effort 
    0, // row
    0, // column
  ]);
  
  while(!minHeap.isEmpty()) {
    const smollest = minHeap.remove();
    
    const smollestEffort = smollest[0];
    const currentN = smollest[1];
    const currentM = smollest[2];
    
    if (currentM === m && currentN === n) {
      return smollestEffort;
    }
    
    const top = currentN + 1;
    const left = currentM + 1;
    const bottom = currentN - 1;
    const right = currentM - 1;
    
    const movements = [
      [top, currentM],
      [currentN, left],
      [bottom, currentM],
      [currentN, right],
    ];
    
    for (const move of movements) {
      if (heights[move[0]]?.[move[1]]) {
        const height = heights[move[0]]?.[move[1]];
        const smollestHeight = heights[currentN][currentM];
        
        const diff = Math.abs(smollestHeight - height);
        
        const minEffor = Math.max(diff, smollestEffort);
        
        if (minEffor < pathEfforts[move[0]][move[1]]) {
          pathEfforts[move[0]][move[1]] = minEffor;
          
          minHeap.insert([
            minEffor, // effort 
            move[0],  // row
            move[1],  // column
          ]);
        }
      }
    }
  }
};
