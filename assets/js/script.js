// This function generates a random password when run
function generatePassword() {
    // Series of prompts to determine character types
    var lowerCaseConfirm = confirm("Include lower case?");
    var upperCaseConfirm = confirm("Include upper case?");
    var numbersConfirm = confirm("Include numbers?");
    var specialCharactersConfirm = confirm("Include special characters?");
        // All characters in separate arrays
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var specialCharacters =  "\" !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
    var numbers = "0123456789".split("");
    // Empty array which the function adds characters to depending on user's answers to the prompts
    var includedCharacters = [];
    // Empty string which will become the password
    var password = "";
    
    // These if statements populate the includedCharacters array with all characters the user wishes to include
    if (lowerCaseConfirm == true) {
        includedCharacters.push(...lowerCase);
    }
    if (upperCaseConfirm == true) {
        includedCharacters.push(...upperCase);
    }
    if (numbersConfirm == true) {
        includedCharacters.push(...numbers);
    }
    if (specialCharactersConfirm == true) {
        includedCharacters.push(...specialCharacters);
    }
    // If the user chooses not to include any character types, the function will alert an error and stop running
    if (includedCharacters.length < 1) {
        alert("Error: You must select at least one character type to be included in the password");
        return false;
    }
    // Length of the password, limited to 8-128 characters by the while statement
    // Length variable is defined in this line to check that user has included at least one character type before prompting length (so that the error message pops up at the appropriate time)
    var length = prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
    while (length < 8 || length > 128) {
        length = prompt("Password length must be between 8 and 128 characters. Please enter a new length: ")
    }
    // Password of set length is generated using random indexing of the includedCharacters array
    for (i = 0; i < length; i++) {
        password += (includedCharacters[Math.floor(Math.random() * includedCharacters.length)]);
    }
    // Text in HTML is replaced by newly generated password
    document.getElementById("password").textContent = password;
}