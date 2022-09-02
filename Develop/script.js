// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordCharacters = "";
var numberCase = "0123456789";
var specialCase = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperCaseF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseF = "abcdefghijklmnopqrstuvwxyz";
var brac = [];
function generatePassword() {
  // Prompt user with password criteria //
  var length = prompt ("How many characters would you like? Your password must be between 8 and 128 characters")
  console.log(length);
  var Lower = confirm ("Would you like lower case letters in your password?")
  console.log(Lower)
  var Upper = confirm ("Would you like upper case letters in your password?")
  console.log(Upper)
  var Numbers = confirm ("Would you like numbers in your password?")
  console.log(Numbers)
  var Specialcharacters = confirm ("Would you like special characters in your password?")
  console.log(Specialcharacters)
  // Validation Input//
  if (length < 8 || length > 128) {
    return generatePassword()
  }
  if (Lower == true) {
    for (var i = 0; i < lowerCaseF.length; i++){
      brac.push(lowerCaseF[i]);
    }
  }
  if (Upper == true) {
    for (var i = 0; i < upperCaseF.length; i++){
      brac.push(upperCaseF[i]);
    }
  }
  if (Numbers == true) {
    for (var i = 0; i < numberCase.length; i++){
      brac.push(numberCase[i]);
    }
  }
  if (Specialcharacters == true) {
    for (var i = 0; i < specialCase.length; i++){
      brac.push(specialCase[i]);
    }
  }
  // Generate Password with given criteria //
  console.log(brac)
  for (let i = 0; i < length; i++) {
    passwordCharacters = passwordCharacters + brac[Math.floor(Math.random() * brac.length)];
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
