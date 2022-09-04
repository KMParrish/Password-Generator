// Assignment code here
var generateBtn = document.querySelector("#generate");
var numberCase = "0123456789";
var specialCase = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperCaseF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseF = "abcdefghijklmnopqrstuvwxyz";
function generatePassword() {
  var characters = [];
  var passwordCharacters = "";
  // Prompt user with password criteria //
  var length = prompt ("How many characters would you like? Your password must be between 8 and 128 characters")
  console.log(length);
  var lower = confirm ("Would you like lower case letters in your password?")
  console.log(lower)
  var upper = confirm ("Would you like upper case letters in your password?")
  console.log(upper)
  var numbers = confirm ("Would you like numbers in your password?")
  console.log(numbers)
  var specialCharacters = confirm ("Would you like special characters in your password?")
  console.log(specialCharacters)
  // Validation Input//
  if (length < 8 || length > 128) {
    return generatePassword()
  }
  if (lower == true) {
    for (var i = 0; i < lowerCaseF.length; i++){
      characters.push(lowerCaseF[i]);
    }
  }
  if (upper == true) {
    for (var i = 0; i < upperCaseF.length; i++){
      characters.push(upperCaseF[i]);
    }
  }
  if (numbers == true) {
    for (var i = 0; i < numberCase.length; i++){
      characters.push(numberCase[i]);
    }
  }
  if (specialCharacters == true) {
    for (var i = 0; i < specialCase.length; i++){
      characters.push(specialCase[i]);
    }
  }
  // Generate Password with given criteria //
  console.log(characters)
  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    var randomCharacter = characters[randomNumber]
    passwordCharacters = passwordCharacters + randomCharacter
    console.log(randomNumber)
   
    
  }

  

  return passwordCharacters;
}
  // Display Password to Page //



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
