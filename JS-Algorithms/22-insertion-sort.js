// write a sorting function which that builds the final sorted array one item at a time

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }
    return arr;
}

insertionSort([2,1,9,6,4]); // [1, 2, 4, 6, 9]