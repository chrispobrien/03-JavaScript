// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ** Challenge assignment **
function generatePassword() {

  // We have 4 yes/no questions, so I have this local function
  function promptYN(promptText,defaultValue) {
    // Declare return variable yn as local block level
    let yn=defaultValue;
    yn = yn.toLowerCase;

    // Check defaultValue is a valid choice, if not set to y (yes)
    if (yn != 'y' && yn != 'n') {yn=""};

    // Loop until user submits a valid response or cancels the prompt
    do {
      yn = prompt(promptText,defaultValue);
      yn = yn.toLowerCase();
      if (yn != 'y' && yn !='n' && yn != null) {
        alert("Please enter y or n!");
      }
    } while (yn != 'y' && yn != 'n' && yn != null);
    return yn;
  }

  // Type of characters to possibly include in the password
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = upperCaseLetters.toLowerCase();
  const numbers = "0123456789";
  const symbols = "(~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/)";
  // Legal symbols in Windows because I'm a Microsoft fanboy
  // Note doube quote in symbols is escaped \"

  // Minimum and maximum password length
  const minLength = 8;
  const maxLength = 128;

  // initialize length to 0
  let length = 0;

  // Repeat prompt until number entered within minimum and maximum, default to minimum
  // Note: prompt returns a string value, test that the data entered is an integer by comparing it to its parseInt() value
  do {
    length = prompt("How long do you want your password to be? (" + minLength + " - " + maxLength + ")", minLength);
    if (length === null) return("");
    if (length < minLength || length > maxLength || length != parseInt(length))
     alert("Please enter a valid number between "+ minLength + " and " + maxLength + "!");
  } while (length < minLength || length > maxLength || length != parseInt(length));
  // Cast length to an integer just in case an integer within a string causes problems later on
  length = parseInt(length);

  // Initialize options as empty strings
  let includeUpperCase="";
  let includeLowerCase="";
  let includeNumbers="";
  let includeSymbols="";

  // Repeat prompts until at least one character type selected or user cancels
  do {

    includeUpperCase = promptYN("Include upper case letters (A-Z)? (y/n)", "y");
    if (includeUpperCase === null) return("");

    includeLowerCase = promptYN("Include lower case letters (a-z)? (y/n)", "y");
    if (includeLowerCase === null) return("");

    includeNumbers = promptYN("Include numbers (0-9)? (y/n)", "y");
    if (includeNumbers === null) return("");

    includeSymbols = promptYN("Include symbols? (y/n)", "y");
    if (includeSymbols === null) return("");

    // If user doesn't select at least one character type, show error
    if (includeUpperCase === "n" && includeLowerCase === "n" && includeNumbers ==="n" && includeSymbols === "n")
      alert("Please choose at least one character type!");

  } while (includeUpperCase === "n" && includeLowerCase === "n" && includeNumbers === "n" && includeSymbols === "n");

  // Declare return var as empty string
  let returnPassword="";

  // Assemble keySpace to include all selected character types
  let keySpace="";
  
  if (includeUpperCase === "y")
    keySpace += upperCaseLetters;
  
  if (includeLowerCase === "y")
    keySpace += lowerCaseLetters;
  
  if (includeNumbers === "y")
    keySpace += numbers;
  
  if (includeSymbols === "y") 
    keySpace += symbols;
  
  // Finally generate desired length password using random characters from keySpace
  for (let i = 0; i < length; i++) {
    returnPassword += keySpace[Math.floor(Math.random()*keySpace.length)];
  }

  return returnPassword;
}
