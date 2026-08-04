// Given an m x n grid of characters, board, and a string word, return TRUE if word exists in the grid.
//
// The word can be formed by connecting letters of sequentially adjacent cells. The cells are considered sequentially adjacent when neighbors are either horizontally or vertically neighbors. Each cell can be used only once while forming the word.

const assert = require('node:assert/strict');
// #backtracking_pattern
function wordSearch(grid, word) {
  let result = false;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        const visited = {};
        const queue = [[i, j, 0]];
        while (queue.length > 0) {
          const [i, j, charIndex] = queue.pop();
          if (charIndex === word.length) {
            return true;
          }
          if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || visited[[i, j].join(',')]) {
            continue;
          }
          if (grid[i][j] === word[charIndex]) {
            visited[[i, j].join(',')] = true;
            queue.push(
              [i + 1, j, charIndex + 1],
              [i - 1, j, charIndex + 1],
              [i, j + 1, charIndex + 1],
              [i, j - 1, charIndex + 1],
            );
          }
        }
      }
    }
  }

  return result;
}

assert.equal(
  wordSearch([["N","W","L","I","M"],["V","I","L","Q","O"],["O","L","A","T","O"],["R","T","A","I","N"],["O","I","T","N","C"]], "LATIN"),
  true,
);
assert.equal(
  wordSearch([["J","D","E","I","Y"],["G","I","L","M","O"],["Z","A","I","E","O"],["L","T","B","S","N"],["S","I","T","C","C"]], "AIM"),
  false,
);
assert.equal(
  wordSearch([["L","S","T","I","M"],["I","I","L","M","O"],["S","K","I","E","O"],["P","T","A","S","J"],["M","X","T","A","C"]], "GRAB"),
  false,
);
assert.equal(
  wordSearch([["C","S","S","A","M"],["O","I","L","L","O"],["O","L","I","T","O"],["R","T","A","S","N"],["S","I","T","A","C"]], "SALT"),
  true,
);
assert.equal(
  wordSearch([["H","D","L","I","M"],["R","I","L","Z","O"],["W","B","A","E","O"],["H","U","K","V","N"],["S","Y","E","D","C"]], "BAKED"),
  true,
);
assert.equal(
  wordSearch([["v","W","D"]], "WD"),
  true,
);
