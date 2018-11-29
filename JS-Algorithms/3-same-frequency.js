// given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) {
        return false;
    }
    let numbers = {};
    for (let i = 0; i < str1.length; i++) {
        let integ = str1[i];
        numbers[integ] ? numbers[integ] += 1 : numbers[integ] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let integ = str2[i];
        if(!numbers[integ]) {
            return false;
        } else {
            numbers[integ] -= 1;
        }
    }
    return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false