// Given the head of a singly linked list, reverse the linked list and return its updated head.

// # linked_list_pattern
const assert = require('node:assert/strict');
const { list2array, makeList } = require('./utils');
/**
 * 🟡 Main idea
 *    1. Iterate over the list
 *    2. Remember the previous node and change the link to the next node
 */

function reverse(head) {
  let node = head;
  let prev = null;
  while (node !== null) {
    const nextNode = node.next;
    node.next = prev;
    prev = node;
    node = nextNode;
  }

  return prev;
}

assert.deepEqual(
  list2array(
    reverse(
      makeList([1,-2,3,4,-5,4,3,-2,1])
    ),
  ),
  [1,-2,3,4,-5,4,3,-2,1],
);
assert.deepEqual(
  list2array(
    reverse(
      makeList([-1,-5,-3,-7,-8,-6,-2])
    ),
  ),
  [-2,-6,-8,-7,-3,-5,-1],
);
