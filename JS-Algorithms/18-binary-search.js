// write a function which accepts a sorted array and a value
// and returns the index at which the value exists
// otherwise, return -1

function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== val && left <= right) {
      if (val < arr[middle]) right = middle - 1;
      else left = middle + 1;
      middle = Math.floor((right + left) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

binarySearch([1,2,3,4,5], 2); // 1
binarySearch([1,2,3,4,5], 6); // -1