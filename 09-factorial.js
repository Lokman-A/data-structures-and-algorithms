// give an integer 'n', find the factorial of that integer
//4! = 4*3*2*1 = 24
//5! = 5*4*3*2*1 = 120

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(10)); // O(n)
