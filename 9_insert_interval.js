// You are given a list of non-overlapping intervals, intervals, where each interval is represented as [starti, endi] and the list is sorted in ascending order by the start of each interval (starti). You are also given another interval, newInterval = [start, end].

// Your task is to insert newInterval into the list of intervals such that the list remains sorted by starting times and still contains no overlapping intervals. If any intervals overlap after the insertion, merge them accordingly.

// # merge_intervals_pattern
const assert = require('node:assert/strict');
/**
 * 🟡 Main idea
 *    1. Insert interval into the right place (after that use the solution for the merge_intervals)
 *    2. Sort incoming interval by the first index
 *    3. Insert or update the interval, depending on whether it overlaps or not
 */

function insertInterval(intervals, insertedInterval) {
  const isOverlapping = (i1, i2) => i2[0] <= i1[1];
  if (intervals.length === 0) {
    return [insertedInterval];
  }
  if (insertedInterval[0] <= intervals[0][0]) {
    intervals.splice(0, 0, insertedInterval);
  } else if (insertedInterval[0] >= intervals.at(-1)[0]) {
    intervals.push(insertedInterval);
  } else {
    for (let i = 0; i < intervals.length; i++) {
      if (insertedInterval[0] <= intervals[i][0]) {
        intervals.splice(i, 0, insertedInterval);
        break;
      }
    }
  }

  const result = [];

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

assert.deepEqual(insertInterval([[1,2],[3,4],[5,8],[9,15]], [2,5]), [2,5]);
