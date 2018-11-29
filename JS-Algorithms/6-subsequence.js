// write a function which takes in two strings and checks whether the characters 
// in the first string appear somewhere in the second string without their order changing

function isSubsequence(str1, str2) {
    let a = 0;
    let subs = '';
    for (let b = 0; b < str2.length; b++) {
        if(str1[a] === str2[b]) {
            subs += str2[b];
            a++;
        }
    }
    if (subs === str1) {
        return true;
    } else { return false; }
}

isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'acb'); // false