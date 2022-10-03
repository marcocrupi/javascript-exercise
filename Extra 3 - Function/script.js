// JavaScript Program to Check Whether a String is Palindrome or Not

// Example 1: Check Palindrome Using for Loop

function checkPalindromeForLoop(string) {
  let stringConversion = string.split(" ");
  stringConversion = stringConversion.join("");

  console.log(stringConversion);
  // find the length of a string
  const len = stringConversion.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (stringConversion[i] !== stringConversion[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const stringFor = "eri un nano non annuire";

// call the function
const value = checkPalindromeForLoop(stringFor);

console.log(value);

// Example 2: Check Palindrome using built-in Functions

function checkPalindromeWithMethod(string) {
  // convert string to an array
  let arrayValues = string.split("");

  // reverse the array values
  let reverseArrayValues = arrayValues.reverse();

  // convert array to string
  let reverseString = reverseArrayValues.join("");

  console.log(string);
  console.log(reverseString);

  // .replace(/\s/g, "") remove all white space inside string

  if (string.replace(/\s/g, "") == reverseString.replace(/\s/g, "")) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

//take input
const stringMethod = "eri un nano non annuire";

checkPalindromeWithMethod(stringMethod);
