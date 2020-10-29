// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates arrays for password variables
var number = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "/", ":", ";", "<", ">", ",", ".", "?"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creates a prompt box for user to choose password length between 8 and 128 characters
var passwordLength = prompt("How many characters should your password be? (Choose a number between 8 and 128)");

// If user enters a number less than 8 or more than 128, we alert them to choose a length between 8 and 128 characters
if (passwordLength > 128 || passwordLength < 8) {
  alert("Passsword length must be between 8 and 128 characters")
}

// If password length conditions are successfully met, we alert how long password will be.
else {
  alert("Your password will be " + passwordLength + " characters");
}

// Creates a confirm box to see if user wants password to include numbers
var confirmNumbers = confirm("Do you want your password to include numbers?");

// If user wants numbers (confirmNumbers === true), we run the following code to generate a random number between 0 and 9
if (confirmNumbers === true) {
  var num = Math.floor(Math.random() * 10);
}

// Creates a confirm box to see if user wants password to include special characters
var confirmSpecials = confirm("Do you want your password to include special characters?");

// If user wants numbers (confirmSpecials === true), we include special characters in the randomly generated password.
/* if (confirmSpecials === true) {
  var special = Math.floor(Math.random() * 10);

  //console.log(num);
} */

// Creates a confirm box to see if user wants password to include uppercase letters
var confirmUppercase = confirm("Do you want your password to include uppercase letters?");

// If user wants numbers (confirmUppercase === true), we include uppercase letters in the randomly generated password.
function generateRandomUppercase() {
  var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return capAlphabet[Math.floor(Math.random() * capAlphabet.length)]
}

console.log(generateRandomUppercase);
// Creates a confirm box to see if user wants password to include lowercase letters
var confirmLowercase = confirm("Do you want your password to include lowercase letters?");

// If user wants numbers (confirmLowercase === true), we include lowercase letters in the randomly generated password.
function generateRandomLowercase() {
  var lowAlphabet = "abcdefghijklmnopqrstuvwxyz"

  return lowAlphabet[Math.floor(Math.random() * lowAlphabet.length)]
}

console.log(generateRandomLowercase);