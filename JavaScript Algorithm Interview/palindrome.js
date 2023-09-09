/*
find palidrome
palindrome("abba") == true
palidrome(abcdefg) == false
*/

/* Solution
1. reverse the string
2. check the original if they are same
*/

const Palidrome = (str) => {
  const isPalidrome = str.split("").reverse().join("");
  console.log(str === isPalidrome);
};

Palidrome("abba");

// Solution 2
const palidromeStr = (str) => {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(str === reversed);
};
palidromeStr("david");
