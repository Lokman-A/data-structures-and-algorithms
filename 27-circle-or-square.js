function circleOrSquare(arr) {
  const PI = 3.14;
  if (arr.length === 0 || arr.length > 2) return 0;
  if (arr.length === 1) return PI * arr[0] ** 2;
  else {
    return arr[0] * arr[1];
  }
}

console.log(circleOrSquare([1, 3]));
//O(1)
