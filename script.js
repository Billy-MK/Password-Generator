function generatePassword() {
    var lowerCaseConfirm = confirm("Include lower case?");
    var upperCaseConfirm = confirm("Include upper case?");
    var numbersConfirm = confirm("Include numbers?");
    var specialCharactersConfirm = confirm("Include special characters?");
    var length = prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var specialCharacters =  "\" !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
    var numbers = "0123456789".split("");
    var includedCharacters = [];
    
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
}