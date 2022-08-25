// given an array of integers, sort the array.
// [-6, 20, 8, -2, 4]
// output: [-6, -2, 4, 8, 20]

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
//O(n^2)
