// write a function which accepts an array and a value and returns the index
// at which the value exists
// if the value does not exist in the array, return -1
// don't use indexOf to implement this function

function linearSearch(arr, value){
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] === value) return i;
  }
  return -1;
}

linearSearch([10,15,20,25,30], 15); // 1
linearSearch([100], 200); // -1