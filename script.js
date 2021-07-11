// Assignment code here
// 67 with  no numbers, 77 with numbers

const numbersArray = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', ' ', '!', '"', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]; 

function generatePassword() {
  let passwordLength = prompt("Password length");
  passwordLength = Number(passwordLength);
  passwordNumbers = confirm("Do you want to use numbers in your password?");
  passwordUpper = confirm("Do you want only Uppercase letters?");
  passwordLower = confirm("Alternately, do you want only Lowercase letters?");

  if (passwordNumbers){
    arrayLength = 76;
  }
  else {
    arrayLength = 66;
  }


  let passwordArray = [];

  if (passwordLength > 8 && passwordLength < 128) {

    for (passwordLength > 0; passwordLength--;) {
  
      passwordArray.push(numbersArray[Math.floor(Math.random() * arrayLength)]);
      
    }
    passwordArray = passwordArray.join("");
    if (passwordUpper){
      passwordArray = passwordArray.toUpperCase();
    }
    if (passwordLower) {
      passwordArray = passwordArray.toLowerCase();
    }
    return passwordArray
  }

  else {
    return "Not a valid length";
}

}

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