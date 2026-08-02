class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const makeList = (arr) => {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }

  return head;
};

const list2array = (head) => {
  const result = [];
  let node = head;
  while (node !== null) {
    result.push(node.value);
    node = node.next;
  }

  return result;
};

module.exports = {
  makeList,
  list2array,
  ListNode,
};
