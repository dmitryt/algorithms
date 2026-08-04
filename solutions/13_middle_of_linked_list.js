// Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.

// #fast_slow_pointers_pattern
const assert = require('node:assert/strict');
const { list2array, makeList } = require('../utils');

function getMiddleNode(head){
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

assert.deepEqual(
  getMiddleNode(
    makeList([1,2,3,4,5])
  ).value,
  3,
);
assert.deepEqual(
  getMiddleNode(
    makeList([1,2,3,4,5,6])
  ).value,
  4,
);
