// You are given an array of integers nums and a sliding window of size w that moves from left to right across the array, shifting one position at a time.

// Your task is to find the maximum value within the current window at each step and return it.

// # sliding_window_pattern
const assert = require('node:assert/strict');

/**
 * 🟢 Pay attention, it should be minimal-length sequence
 * 🟡 Main idea
 *    1. You find the sequence, but is it the minimal length sequence?
 *    2. Ok, I can try to scan all sequences, but is it enough?
 *    3. Probably I can try to scan both sequences from left to right and from right to left and then find the answer
 * 🔴 Pay attention - if you want to unify the solution of scanning, then you should correctly detect start and end of the range(function "findSubstring", return part)
 *
 * So, to sum up - find all sequences and scan them from left to right and right to left
 *
 */

function minWindow(s1, s2) {
  function findSubstring(start, step) {
    let j = step === 1 ? 0 : s2.length - 1;
    let i = start;
    let firstMatch = null;
    while (i >= 0 && i < s1.length) {
      if (s1[i] === s2[j]) {
        if (firstMatch === null) {
          firstMatch = i;
        }
        j += step;
      }
      if (j === -1 || j === s2.length) {
        return i < firstMatch ? [i, firstMatch] : [firstMatch, i];
      }
      i += step;
    }

    return null;
  }

  let result = null;

  let i = 0;
  while (i < s1.length) {
    let indices = findSubstring(i, 1);
    if (indices === null) {
      break;
    } else {
      if (result === null || indices[1] - indices[0] < result[1] - result[0]) {
        result = indices;
      }
      indices = findSubstring(indices[1], -1);
      if (indices[1] - indices[0] < result[1] - result[0]) {
        result = indices;
      }
      i = indices[0] + 1;
    }
  }

  return result === null ? "" : s1.slice(result[0], result[1] + 1);
}

assert.equal(minWindow("abcdebdde", "bde"), "bcde");
assert.equal(minWindow("fgrqsqsnodwmxzkzxwqegkndaa", "kzed"), "kzxwqegknd");
assert.equal(minWindow("michmznaitnjdnjkdsnmichmznait", "michmznait"), "michmznait");
assert.equal(minWindow("afgegrwgwga", "aa"), "afgegrwgwga");
assert.equal(minWindow("abcdbebe", "bbe"), "bebe");

