// given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. return -1 if the target element is not found.

function binarySearch(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) return middleIndex;
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-2, 3, 5, 8, 11], 8)); //3
console.log(binarySearch([-2, 3, 5, 8, 11], 5)); //2
console.log(binarySearch([-2, 3, 5, 8, 11], 3)); //1
console.log(binarySearch([-2, 3, 5, 8, 11], 20)); //-1

// O(log n)
