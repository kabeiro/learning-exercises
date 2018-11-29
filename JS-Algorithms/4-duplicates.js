// implement a function which accepts a variable number of arguments, and checks whether there are any duplicates

function areThereDuplicates() {
    let tracker = {};
    let ifTrue = false;
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        tracker[arg] ? tracker[arg] += 1 : tracker[arg] = 1;
        if (tracker[arg] > 1) {
            ifTrue = true;
        }
    }
    return ifTrue;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true