// give an array of 'n' elements and a target element 't', find the index of 't' in the array. return -1 if the target element is not found.
// arr = [-2,-1,3,6,7],t = 3, should return 2

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) return i;
  }
  return -1;
}

console.log(linearSearch([-2, -1, 3, 6, 7], 7)); // O(n)
