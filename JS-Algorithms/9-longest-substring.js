// write a function, which accepts a string and returns the length
// of the longest substring with all distinct characters

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log(seen);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
    console.log(seen);
  }
  return longest;
}

findLongestSubstring('rithmschool'); // 7
findLongestSubstring('longestsubstring'); // 8