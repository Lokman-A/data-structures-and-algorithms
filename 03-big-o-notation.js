// Big-O notation represents the upper bound of the running time of an algorithm. Thus, it gives the worst-case complexity of an algorithm. Big-O gives the upper bound of a function O(g(n)) = { f(n): there exist positive constants c and n0 such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n0 }

// n = 10
function summation(n) {
  // executed 1 time
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    // executed 10 times
    sum += i;
  }
  // executed 1 time
  return sum;
}
console.log(10); // total execution times: 10 + 1 + 1 = 10 + 2 = n + 2
// time complexity: O(n) - linear

function summationTwo(n) {
  return (n * (n + 1)) / 2;
}
// time complexity: O(1) - constant

const n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // some code
  }
}
// time complexity: O(n^2) - quadratic

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    for (let k = 1; k <= j; k++) {
      // some code
    }
  }
}
// time complexity: O(n^3) - cubic

// time complexity: O(log n) - logarithmic (input size reduces by half every iteration)

// space complexity same as time complexity

// big o trend (best to worst)
/*
O(log n)
O(1)
O(n)
O(n log n)
O(n^2)
O(2^n)
O(n!)
*/
