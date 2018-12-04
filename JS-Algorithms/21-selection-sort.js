// write a function that sorts an array by repeatedly finding the minimum element 
// (considering ascending order) from unsorted part and putting it at the beginning

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([14,2,54,24,10,67,15]); // [2, 10, 14, 15, 24, 54, 67]