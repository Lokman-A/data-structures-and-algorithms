// give a positive integer 'n', determine if the number is a power of 2 or not
//isPowerOfTwo(1) = true (2^0)
//isPowerOfTwo(2) = true (2^1)
//isPowerOfTwo(5) = false

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(16)); // O(log n)

// optimized
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  retun(n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(7)); // O(1)
