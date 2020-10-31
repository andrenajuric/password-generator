// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

// Generates new password when button is clicked
function generatePassword() {
  
  // Prompts user to choose password length between 8 and 128 characters
  var passwordLength = prompt("How many characters should your password be? (Choose a number between 8 and 128)");

  // If length criteria isn't met, alert error message & return
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Passsword length must be between 8 and 128 characters. Please try again.");
    return;
  }

  // Asks user to choose if they want #'s in their password
  var confirmNumbers = confirm("Do you want your password to include numbers?");

  // Asks user to choose if they want special characters 
  var confirmSpecials = confirm("Do you want your password to include special characters?");

  // Asks user to choose if they want uppercase letters
  var confirmUppercase = confirm("Do you want your password to include uppercase letters?");

  // Asks user to choose if they want lowercase letters
  var confirmLowercase = confirm("Do you want your password to include lowercase letters?");

  // Alerts user to ok at least one option
  if (!confirmNumbers && !confirmSpecials && !confirmUppercase && !confirmLowercase) {
    alert("Selection required. Please try again.");
    return;
  }

  // Adds users selections to password
  var passwordSelections = [ ];

  if (confirmNumbers) {
    passwordSelections = passwordSelections.concat(number);
  }

  if (confirmSpecials) {
    passwordSelections = passwordSelections.concat(special);
  }

  if (confirmUppercase) {
    passwordSelections = passwordSelections.concat(uppercase);
  }

  if (confirmLowercase) {
    passwordSelections = passwordSelections.concat(lowercase);
  }

  // Creates variable for the newly generated password
  var newPassword = " ";

  // For-loop runs through user selections for new password & randomizes elements in each array that was called on  
  for(i = 0; i < passwordLength; i++) {
    newPassword = newPassword + passwordSelections[Math.floor(Math.random() * passwordSelections.length)];
    console.log(newPassword);
  }

  // Generates newly generate password
  return newPassword;
}