// Big O Notation is a way to measure an algorithm's efficiency. It measures the time it takes to run your function as the input grows. Or in other words, how well does the function scale. There are two parts to measuring efficiency — time complexity and space complexity.

// Time Complexity
const add = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}; // O(n) - Linear

const addTwo = (n) => (n * (n + 1)) / 2; // O(1) - Constant

const n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log(i, j);
  }
} // O(n^2) - Quadratic

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    for (let k = 1; k <= j; k++) {
      // console.log(i, j, k);
    }
  }
} // O(n^3) - Cubic
