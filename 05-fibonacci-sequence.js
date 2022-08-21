// give a number 'n', find the first 'n' elements of the fibonacci sequence
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(4) = [0,1,1,2]
// fibonacci(5) = [0,1,1,2,3]
// fibonacci(6) = [0,1,1,2,3,5]
// fibonacci(7) = [0,1,1,2,3,5,8]
// fibonacci(8) = [0,1,1,2,3,5,8,13]

function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(10));
// O(n) - only one loop
