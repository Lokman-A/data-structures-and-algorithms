// give an natural number 'n', determine if the number is prime or not
//isPrime(5) = true (1*5 or 5*1)
//isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17)); // O(n)

// optimized version
function isPrimeBest(n) {
  console.log(Math.sqrt(n));
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeBest(17)); // O(sqrt(n))
