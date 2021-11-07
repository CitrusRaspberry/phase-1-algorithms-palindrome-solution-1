function reverseWord(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  let drow = reverseWord(word);

  word = word.toLowerCase();
  drow = drow.toLowerCase();

  console.log(word, drow);
  return word === drow;
}

/*
  Add your pseudocode here

  Create function that reverses word
    Use for

  Create isPalindrome function
    Calls function that reverses word, assigning to variable
    Compares both words

  Call isPalindrome()
*/

/*
  Add written explanation of your solution here

  All I need to do is reverse the string that was inputed and then compare.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
