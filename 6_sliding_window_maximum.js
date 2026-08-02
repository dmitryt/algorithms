// You are given an array of integers nums and a sliding window of size w that moves from left to right across the array, shifting one position at a time.

// Your task is to find the maximum value within the current window at each step and return it.

// # sliding_window_pattern
const assert = require('node:assert/strict');

function findMaxSlidingWindow(nums, w) {
  if (w === 0) {
    return [];
  }

  const result = [];
  let slidingWindow = [];

  for (let i = 0; i < nums.length; i++) {
    // remove items outside the sliding window
    if (slidingWindow.length > 0 && slidingWindow[0] === i - w) {
      slidingWindow.shift();
    }
    // remove items, which are smaller the current item, starting from the end
    while (slidingWindow.length > 0 && nums[slidingWindow.at(-1)] < nums[i]) {
      slidingWindow.pop();
    }
    // push current item to the end
    slidingWindow.push(i);

    // start accumulating the result
    if (i >= w - 1) {
      result.push(nums[slidingWindow[0]]);
    }
  }

  return result;
}

assert.deepEqual(findMaxSlidingWindow([1,2,3,4,5,6,7,8,9,10], 3), [3,4,5,6,7,8,9,10]);
assert.deepEqual(findMaxSlidingWindow([3,3,3,3,3,3,3,3,3,3], 4), [3,3,3,3,3,3,3]);
assert.deepEqual(findMaxSlidingWindow([10,6,9,-3,23,-1,34,56,67,-1,-4,-8,-2,9,10,34,67], 3), [10,9,23,23,34,56,67,67,67,-1,-2,9,10,34,67]);
assert.deepEqual(findMaxSlidingWindow([4,5,6,1,2,3], 1), [4,5,6,1,2,3]);
assert.deepEqual(findMaxSlidingWindow([9], 1), [9]);

