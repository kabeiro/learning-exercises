// Given two strings, write a function to determine if the second string is an anagram of the first.
// You may assume the string contains only lowercase alphabets.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
       return false; 
    }
    let ifExists = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        ifExists[char] ? ifExists[char] += 1 : ifExists[char] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if(!ifExists[char]) {
            return false;
        } else {
            ifExists[char] -= 1;
        }
    }
    return true;
}

validAnagram('texttwisttime', 'timetwisttext'); // true
validAnagram('aaz', 'zza'); // false