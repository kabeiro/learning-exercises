// write a sorting function that works by repeatedly swapping the adjacent elements 
// if they are in wrong order

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([3,2,8,45,7,54,86,5]); // [2, 3, 5, 7, 8, 45, 54, 86]

// optimized variant for nearly sorted array

function shortBubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

shortBubbleSort([8,1,2,3,4,5,6,7]); // [1,2,3,4,5,6,7,8]