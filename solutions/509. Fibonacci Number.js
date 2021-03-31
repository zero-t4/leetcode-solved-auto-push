/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let result = 0;

  let prev = 1;
  let prePrev = 0;

  for (let i = 2; i <= n; i++) {
    result = prev + prePrev;

    prePrev = prev;
    prev = result;
  }

  return result;
};

const fib_ = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib_(n - 1) + fib_(n - 2);
};

// Test cases
// console.assert(fib(0) === 0);
// console.assert(fib(1) === 1);
// console.assert(fib(2) === 1);
// console.assert(fib(3) === 2);
// console.assert(fib(4) === 3);
// console.assert(fib(5) === 5);
// console.assert(fib(6) === 8);

// console.assert(fib_(0) === 0, 'test 0 failed');
// console.assert(fib_(1) === 1, 'test 1 failed');
// console.assert(fib_(2) === 1, 'test 2 failed');
// console.assert(fib_(3) === 2, 'test 3 failed');
// console.assert(fib_(4) === 3, 'test 4 failed');
// console.assert(fib_(5) === 5, 'test 5 failed');
// console.assert(fib_(6) === 8, 'test 6 failed');
