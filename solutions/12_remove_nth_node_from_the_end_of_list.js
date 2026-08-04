// Given the head of a singly linked list, remove the nth node from the end of the list and return the head of the modified list.
// #two_pointers_pattern
const assert = require('node:assert/strict');
const { list2array, makeList } = require('../utils');

function removeNthLastNode(head, n) {
  let l = 0;
  let r = 0;
  let lNode = head;
  let rNode = head;
  let pNode = null;
  while (rNode !== null) {
    if (r - l >= n) {
      pNode = lNode;
      lNode = lNode.next;
      l++;
    }
    rNode = rNode.next;
    r++;
  }
  if (pNode === null) {
    return head.next;
  }
  pNode.next = lNode.next;
  return head;
}

assert.deepEqual(
  list2array(
    removeNthLastNode(makeList([7]), 1),
  ),
  [],
);
assert.deepEqual(
  list2array(
    removeNthLastNode(makeList([3,8,12,6]), 4),
  ),
  [8,12,6],
);
assert.deepEqual(
  list2array(
    removeNthLastNode(makeList([10,20,30,40,50]), 1),
  ),
  [10,20,30,40],
);
