// Monomorphic function - processes one shape
function getX(point) {
  return point.x;
}

// Create 1 million points with same shape
const goodPoints = [];
for (let i = 0; i < 1000000; i++) {
  goodPoints.push({x: i, y: i * 2});
}

// Create 1 million points with different shapes
const badPoints = [];
for (let i = 0; i < 1000000; i++) {
  if (i % 2) {
    badPoints.push({x: i, y: i * 2});      // Shape A
  } else {
    badPoints.push({y: i * 2, x: i});      // Shape B - different order!
  }
}

console.time('Monomorphic');
let sum = 0;
for (const p of goodPoints) sum += getX(p);
console.timeEnd('Monomorphic');  // ~8ms on my machine

console.time('Polymorphic');
sum = 0;
for (const p of badPoints) sum += getX(p);
console.timeEnd('Polymorphic');  // ~450ms on my machine
