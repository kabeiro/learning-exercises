// write a function which divides input array in two halves, 
// calls itself for the two halves and then merges the two sorted halve

function mergeSubarrays(arr1, arr2) {
    let newArr = [];
    let first = 0;
    let second = 0;
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] < arr2[second]) {
            newArr.push(arr1[first]);
            first++;
        } else {
            newArr.push(arr2[second]);
            second++;
        } 
    }
    while (first < arr1.length) {
        newArr.push(arr1[first]);
        first++;
    }
    while (second < arr2.length) {
        newArr.push(arr2[second]);
        second++;
    }
    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSubarrays(left, right);
}

mergeSort([2,7,5,4,9,1,3,8]); // [1, 2, 3, 4, 5, 7, 8, 9]