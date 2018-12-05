// write a sorting function which picks an element as pivot 
// and partitions the given array around the picked pivot

function pivot(arr, start=0, end=arr.length+1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    let pivot = arr[start];
    let swapInd = start;
    
    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapInd++;
            swap(arr, swapInd, i);
        }
    }
    swap(arr, start, swapInd);
    return swapInd;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

quickSort([4,6,9,1,7,2,8,5,3]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]