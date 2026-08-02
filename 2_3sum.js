// Given an integer array nums, find all unique triplets [nums[i], nums[j], nums[k]] where i, j, and k are distinct indices, such that the three elements sum to zero.

// The result must not contain any duplicate triplets. The order of the output and the order of elements within each triplet does not matter.

// #two_pointers pattern
const assert = require('node:assert/strict');

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  let prev = null;
  for (let i = 0; i < nums.length - 2; i++) {
    if (prev === nums[i]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    prev = nums[i];
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        let prevL = nums[l];
        while (nums[l] === prevL) {
          l++;
        }
        let prevR = nums[r];
        while (nums[r] === prevR) {
          r--;
        }
      }
    }
  }

  return result;
};

assert.deepEqual(threeSum([-3,-1,0,1,2,3,-2,4]), [[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,0,1]]);
assert.deepEqual(threeSum([1,-2,1]), [[-2,1,1]]);
assert.deepEqual(threeSum([1,2,3,4,5]), []);
assert.deepEqual(threeSum([0,0,0,-1,1,2,-2]), [[-2,0,2],[-1,0,1],[0,0,0]]);
assert.deepEqual(threeSum([-1,-1,-1,0,1,1,1,2,2]), [[-1,-1,2],[-1,0,1]]);
