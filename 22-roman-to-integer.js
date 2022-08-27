const romanToInteger = function (str) {
  const guide = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (guide[str[i]] < guide[str[i + 1]]) result -= guide[str[i]];
    else result += guide[str[i]];
  }
  return result;
};

console.log(romanToInteger("LVIII"));
// O(n)
