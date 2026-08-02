// We are given an array of closed intervals called intervals,
// where each interval has a start time and an end time and is represented as intervals[i] = [starti, endi].
// Your task is to merge all the overlapping intervals and return an array of the resulting non-overlapping
// intervals that cover all the intervals in the input.

// # merge_intervals_pattern
const assert = require('node:assert/strict');
/**
 * 🟡 Main idea
 *    1. Sort incoming interval by the first index
 *    2. Insert or update the interval, depending on whether it overlaps or not
 */

function mergeIntervals(intervals) {
  const isOverlapping = (i1, i2) => i2[0] <= i1[1];
  const result = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    if (result.at(-1) === undefined || !isOverlapping(result.at(-1), intervals[i])) {
      result.push(intervals[i]);
    } else {
      result[result.length - 1] = [
        Math.min(result.at(-1)[0], intervals[i][0]),
        Math.max(result.at(-1)[1], intervals[i][1]),
      ];
    }
  }

  return result;
}

assert.deepEqual(mergeIntervals([[4,6],[3,7],[1,5]]), [[1,7]]);
assert.deepEqual(mergeIntervals([[1,5],[4,6],[11,15],[6,8]]), [[1,8],[11,15]]);
assert.deepEqual(mergeIntervals([[1,5]]), [[1,5]]);
assert.deepEqual(mergeIntervals([[1,9],[3,8],[4,4]]), [[1,9]]);
assert.deepEqual(mergeIntervals([[1,2],[8,8],[3,4]]), [[1,2],[3,4],[8,8]]);
