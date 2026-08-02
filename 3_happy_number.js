// Write an algorithm to determine if a number n is a happy number.

// We use the following process to check if a given number is a happy number:

//   - Starting with the given number n, replace the number with the sum of the squares of its digits.
//   - Repeat the process until:
//     The number equals 1, which will depict that the given number n is a happy number.
//   - The number enters a cycle, which will depict that the given number n is not a happy number.
//   Return TRUE if n is a happy number, and FALSE if not.

// # fast_slow_pointers_pattern
const assert = require('node:assert/strict');

function isHappyNumber(n) {
  function getNext(n) {
    return String(n).split('').reduce((acc, a) => acc + parseInt(a) ** 2, 0);
  }
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
    if (slow === fast) {
      return false;
    }
  }

  return true;
}

assert.equal(isHappyNumber(2147483646), false);
assert.equal(isHappyNumber(1), true);
assert.equal(isHappyNumber(19), true);
assert.equal(isHappyNumber(8), false);
assert.equal(isHappyNumber(7), true);
