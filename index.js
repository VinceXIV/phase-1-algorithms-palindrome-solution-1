function isPalindrome(word) {
  // Write your algorithm here
  return reverseWord(word) === word
}

function reverseWord(word){
  return word.split("").reverse().join("")
}

/* 
  Add your pseudocode here

  1. Take the word and reverse it
  2. Check the reversed word to confirm it is similar with the original word
  3. If similar, return true (is palindrome). If not, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("great"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("awesome"));
}

module.exports = isPalindrome;
