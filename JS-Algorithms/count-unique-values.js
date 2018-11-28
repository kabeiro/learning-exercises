// implement a function, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    let a = 0;
    for (let b = 1; b < arr.length; b++) {
        if (arr[a] !== arr[b]) {
            a++;
            arr[a] = arr[b];
        }
    }
    return a + 1;
}

countUniqueValues([1,2,3,4,4,4,4,7,7,12,13]); // 7
countUniqueValues([1,1,1,1,1,1,2]); // 2