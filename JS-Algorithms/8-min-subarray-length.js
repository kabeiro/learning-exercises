// write a function which accepts two parameters - an array of positive integers and a positive integer
// the function should return the minimal length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function. if there isn't one, return 0 instead

function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < arr.length) {
    if(total < sum && end < arr.length){
      total += arr[end];
			end++;
    }
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= arr[start];
			start++;
    } else { break; }
  }
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2,3,1,2,4,3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5