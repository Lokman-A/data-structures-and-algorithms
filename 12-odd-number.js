// give an integer 'n', determine if the number is an odd or not

function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  }
  return false;
}

console.log(isOdd(11)); // O(1)
