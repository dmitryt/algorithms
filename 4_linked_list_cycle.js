// Given the head of a linked list, determine whether the list contains a cycle. A cycle exists if a node in the list can be revisited by continuously following the next pointers. Return TRUE if a cycle is present; otherwise, return FALSE.

// # fast_slow_pointers_pattern
const assert = require('node:assert/strict');

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const makeList = (arr, linkedNodeIndex) => {
  let next = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    next = new ListNode(arr[i], next);
  }
  let result = next;

  if (linkedNodeIndex !== -1) {
    let head = result;
    let node = null;
    let i = 0;
    while (head.next !== null) {
      if (i === linkedNodeIndex) {
        node = head;
      }
      head = head.next;
      i++;
    }

    // head is a tail here
    head.next = node;
  }

  return result;
};

function detectCycle(n) {
  let slow = n;
  let fast = n.next;


  while (fast !== null) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next?.next ?? null;
  }

  return false;
}

assert.equal(detectCycle(makeList([2,4,6,8,10], 2)), true);
assert.equal(detectCycle(makeList([1,3,5,7,9], -1)), false);
assert.equal(detectCycle(makeList([1,2,3,4,5], 3)), true);
assert.equal(detectCycle(makeList([0,2,3,5,6], -1)), false);
assert.equal(detectCycle(makeList([3,6,9,10,11], 0)), true);

