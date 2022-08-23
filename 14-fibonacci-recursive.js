// give a number 'n', find the nth element of the fibonacci sequence

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6)); // O(2^n)
