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
  // Type of characters to possibly include in the password
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = upperCaseLetters.toLowerCase();
  var numbers = "0123456789";
  var symbols = "(~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/)";
  // Legal symbols in Windows because I'm a Microsoft fanboy
  // Note doube quote in symbols is escaped \"

  // Minimum and maximum password length
  var minLength = 8;
  var maxLength = 128;

  // initialize length to 0
  var length = 0;

  // Repeat prompt until number entered within minimum and maximum, default to minimum
  while (length < minLength || length > maxLength) {
    length = prompt("How long do you want your password to be? (8 - 128)", "8");
    // If cancel is pressed on prompt, break out of this function and return a blank password
    if (length === null) return("");
  }

  // Initialize options as empty strings
  var includeUpperCase="";
  var includeLowerCase="";
  var includeNumbers="";
  var includeSymbols="";

  // Repeat prompts until at least one character type selected
  do {
    // If user doesn't select at least one character type, show error
    if (includeUpperCase === "n" && includeLowerCase === "n" && includeNumbers ==="n" && includeSymbols === "n") {
      alert("Please choose at least one character type!");
      // Clear options
      includeUpperCase = "";
      includeLowerCase = "";
      includeNumbers = "";
      includeSymbols = "";
    }

    // Repeat prompt until user enters y or n
    while (includeUpperCase != "y" && includeUpperCase != "n") {
      includeUpperCase = prompt("Include upper case letters (A-Z)? (y/n)", "y");
      if (includeUpperCase === null) return("");
      includeUpperCase = includeUpperCase.toLowerCase();
    }

    // Repeat prompt until user enters y or n
    while (includeLowerCase != "y" && includeLowerCase != "n") {
      includeLowerCase = prompt("Include lower case letters (a-z)? (y/n)", "y");
      if (includeLowerCase === null) return("");
      includeLowerCase = includeLowerCase.toLowerCase();
    }

    // Repeat prompt until user enters y or n
    while (includeNumbers != "y" && includeNumbers != "n") {
      includeNumbers = prompt("Include numbers (0-9)? (y/n)", "y");
      if (includeNumbers === null) return("");
      includeNumbers = includeNumbers.toLowerCase();
    }

    // Repeat prompt until user enters y or n
    while (includeSymbols != "y" && includeSymbols != "n") {
      includeSymbols = prompt("Include symbols? (y/n)", "y");
      if (includeSymbols === null) return("");
      includeSymbols = includeSymbols.toLowerCase();
    }

  } while (includeUpperCase === "n" && includeLowerCase === "n" && includeNumbers === "n" && includeSymbols === "n");

  // Generate password according to selection
  var returnPassword="";

  // Assemble keySpace to include all selected character types
  var keySpace="";
  if (includeUpperCase === "y") {
    keySpace = keySpace + upperCaseLetters;
  }
  if (includeLowerCase === "y") {
    keySpace = keySpace + lowerCaseLetters;
  }
  if (includeNumbers === "y") {
    keySpace = keySpace + numbers;
  }
  if (includeSymbols === "y") {
    keySpace = keySpace + symbols;
  }

  // Finally generate desired length password using random characters from keySpace
  for (var i = 0; i < length; i++) {
    returnPassword = returnPassword + keySpace[Math.floor(Math.random()*keySpace.length)];
  }

  return returnPassword;
}
