function merge(arr, low, mid, high) {
  let newArr = new Array(high - low + 1);
  let leftPointer = low,
    rightPointer = mid + 1,
    k = 0;

  while (leftPointer <= mid && rightPointer <= high) {
    if (arr[leftPointer] < arr[rightPointer]) {
      newArr[k++] = arr[leftPointer++];
    } else {
      newArr[k++] = arr[rightPointer++];
    }
  }

  // Copy left half of array if remaining
  for (; leftPointer <= mid; leftPointer++) {
    newArr[k++] = arr[leftPointer];
  }
  // Copy right half of array if remaining
  for (; rightPointer <= high; rightPointer++) {
    newArr[k++] = arr[rightPointer];
  }

  // Update elements in original array
  k = low;
  for (let i = 0; i < newArr.length; i++) {
    arr[k++] = newArr[i];
  }
}

function mergeSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);

    // Divide left half of array
    mergeSort(arr, low, mid);
    // Divide right half of array
    mergeSort(arr, mid + 1, high);
    //  Merge the sorted subarray
    merge(arr, low, mid, high);
  }

  return arr;
}

console.log(mergeSort([2]));
console.log(mergeSort([3, 1, 2, 4]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
