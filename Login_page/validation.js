const nameField = document.getElementById("name-input");
const nameError = document.querySelector(".name-error");
const passwordField = document.getElementById("password-input");
const passwordError = document.querySelector(".password-error");
const emailField = document.getElementById("email-input");
const emailError = document.querySelector(".email-error");

const inputForm = document.querySelector("form");


// basic validations only
inputForm.addEventListener("submit", function(e) {

    // check for two consecutive blank spaces 
    const checkBlankSpaces = function(inputString) {
        var index;
        var noSpaceFlag = true;
        for (index = 0; index < inputString.length; index++) {
            if (inputString[index] == ' ') {
                if (inputString[index + 1] == ' ') {
                    noSpaceFlag = false;
                    break;
                }
            }
        } // for loop ends here

        return noSpaceFlag;
    }

    var nameOkFlag = true;
    nameField.value = nameField.value.trim(); // trim spaces on both edges of a user name
    if (nameField.value === '' || nameField.value == null) {
        nameError.innerText = 'Username cannot be space(s) or empty.';
        e.preventDefault();
        nameOkFlag = false;

    } else if (nameField.value.length < 3) {
        nameError.innerText = 'Username must be atleast 3 characters long.';
        e.preventDefault();
        nameOkFlag = false;

    } else if (checkBlankSpaces(nameField.value) == false) {
        nameError.innerText = 'Username contains multiple consecutive spaces inside.';
        e.preventDefault();
        nameOkFlag = false;

    } else if (nameField.value.length >= 3) {
        nameError.innerText = '';
        nameOkFlag = true;
    }

    var passOkFlag = true;
    if (passwordField.value == null || passwordField.value === '') {
        passwordError.innerText = 'Password cannot be empty.';
        e.preventDefault();
        passOkFlag = false;

    } else if (passwordField.value.length > 0) {
        passwordError.innerText = '';
        passOkFlag = true;
    }

    var emailOkFlag = true;
    if (emailField.value == null || emailField.value === '') {
        emailError.innerText = 'Email cannot be empty.';
        e.preventDefault();
        emailOkFlag = false;
    } else if (emailField.value.indexOf('@') < 0) {
        emailError.innerText = `Email should contain '@' character.`;
        e.preventDefault();
        emailOkFlag = false;
    } else if (emailField.value.length <= 4) {
        emailError.innerText = `Email must be more than 4 characters long.`;
        e.preventDefault();
        emailOkFlag = false;
    } else if (emailField.value.length > 4) {
        emailError.innerText = '';
        emailOkFlag = true;
    }

    if (!(nameOkFlag && passOkFlag && emailOkFlag)) {
        e.preventDefault();
    }

})