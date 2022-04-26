# JavaScript Password Generator

## Description
Week 3 of Columbia Engineering Coding Bootcamp has us writing JavaScript code to prompt the user for parameters of a password to generate.  Parameters include length, and whether or not to include upper case letters, lower case letters, numbers, or symbols.

Obviously to generate a password at least one character type must be selected. Length is between 8 and 128 characters.

For a demonstration please browse to my Github pages:
[https://chrispobrien.github.io/03-JavaScript/]

Objectives include:


```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

* For this exercise I chose to include all code in one function
* I used JavaScript prompt to solicit parameters from the user, and if the user clicks cancel on any prompt, it ends the function execution and returns a blank password
* Invalid input will prompt for the same parameter again immediately
* No character types selected will raise an alert error message and return the user to the first character type prompt
* I defined sets of characters that I concatenate according to the user's answers into a keySpace var
* I compute the random password using Math.random() multiplied by the length of the keySpace var to account for an unknown number of characters in the keySpace, and Math.Floor() to convert that to an integer, and concatenate the result character into the returnPassword var

## Installation

Using git, issue the command:

```sh
git clone https://github.com/chrispobrien/03-JavaScript.git
```

This creates the folder 03-JavaScript within which you will find an index.html file, a style.css, and a script.js.  These files can be used in place or moved to a web server for deployment.

## Usage

Since this is a classroom exercise, I would recommend simply opening the index.html file in a browser on your local machine. Click the button labeled "Generate Password".

[![Password Generator][screenshot]](./03-javascript-homework-demo.png)

## Credits

The contents of
```js
function generatePassword()
```
are my own work to solve the Week 3 homework challenge. Index.html and style.css are provided by Columbia Coding Bootcamp/Trilogy and have not been altered.

## License

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.


<!-- MARKDOWN LINKS & IMAGES -->
[screenshot]: ./03-javascript-homework-demo.png
