// A DNA sequence consists of a series of nucleotides, each represented by one of the characters 'A', 'C', 'G', or 'T'.

// Given a string s representing a DNA sequence, find and return all 10-letter-long substrings that appear more than once within s. The result may be returned in any order.

// # sliding_window_pattern
const assert = require('node:assert/strict');

function findRepeatedDnaSequences(s) {
  const store = {};
  const result = [];
  function updateStore() {
    const key = buf.join('');
    store[key] ??= 0;
    store[key] += 1;
    if (store[key] === 2) {
      result.push(key);
    }
  }
  let j = 0;
  let buf = [];
  while (j < 10) {
    buf.push(s[j++]);
  }
  updateStore();
  while (j < s.length) {
    buf.shift();
    buf.push(s[j++]);
    updateStore();
  }

  return result;
}

assert.deepEqual(findRepeatedDnaSequences("ACGTACGTACGTACGT"), false);
