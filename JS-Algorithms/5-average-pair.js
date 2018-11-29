// given a sorted array of integers and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average
// there may be more than one pair that matches the average target

function averagePair(arr, num) {
    let first = 0;
    let second = 1;
    while (first < second && first < arr.length - 1) {
        let result = (arr[first] + arr[second]) / 2;
        if (result === num) {
            return true;
        } else if (second === arr.length - 1) {
            first++;
            second = first + 1;
        } else {
            second++;
        }
    }
    return false;
}

averagePair([1,2,3],2.5); // true
averagePair([1,3,3,5,6,7,10,12,19],8); // true
averagePair([-1,0,3,4,5,6], 4.1); // false