var userName = document.getElementById("userName");
var email = document.getElementById("Email");
var password = document.getElementById("password");
var repPassword = document.getElementById("repeat-password");
var singUpBtn = document.getElementById("singUp");

var msgName = document.getElementById("msgName");
var msgEmail = document.getElementById("msgEmail");
var msgPass = document.getElementById("msgPass");
var msgRepPass = document.getElementById("msgRepPass");

var userNamRgEx = /([A-Z][a-z]{2,} )([A-Z][a-z]{2,} )?([A-Z][a-z]{2,})/;
var emailRgEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passRgEx = /.{8,}/;

function handleValidationUserMsg(){

    var userNameValue = userName.value;
    if (userNameValue === "") {
        msgName.textContent = "This filed is Required";
        msgName.style.visibility = "visible"
    } else if (!userNamRgEx.test(userNameValue)) {
        msgName.textContent = "please Enter your First and Last Name";
        msgName.style.visibility = "visible"
    } else {
        msgName.style.visibility = "hidden";
        nameValid = userNameValue;
        console.log('dfghjk')
    }

}

function handleValidationEmailMsg(){
    var emailValue = email.value;
    if (emailValue === "") {
        msgEmail.textContent = "This filed is Required";
        msgEmail.style.visibility = "visible"
    } else if (!emailRgEx.test(emailValue)) {
        msgEmail.textContent = "please Enter valid Email";
        msgEmail.style.visibility = "visible"
    } else {
        msgEmail.style.visibility = "hidden";
        emailValid = emailValue;
    }

}

function handleValidationPassMsg(){
    var passwordValue = password.value;
    if (passwordValue === "") {
        msgPass.textContent = "This filed is Required";
        msgPass.style.visibility = "visible";
    } else if (!passRgEx.test(passwordValue)) {
        msgPass.textContent = "password Must contain at least 8 or more characters";
        msgPass.style.visibility = "visible";
    } else {
        msgPass.style.visibility = "hidden";
        passValid = passwordValue;
    }
}

function handleValidationRepPassMsg(){
    var repPasswordValue = repPassword.value;
    if (repPasswordValue === "") {
        msgRepPass.textContent = "This filed is Required";
        msgRepPass.style.visibility = "visible";
    } else if (passwordValue !== repPasswordValue) {
        msgRepPass.textContent = "the password not matching";
        msgRepPass.style.visibility = "visible";
    } else {
        msgRepPass.style.visibility = "hidden";
        repPassValid = repPasswordValue;
    }
}

singUpBtn.addEventListener("click", function () {
    var userNameValue = userName.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    var repPasswordValue = repPassword.value;

    // user name validation
    if (userNameValue === "") {
        msgName.textContent = "This filed is Required";
        msgName.style.visibility = "visible"
    } else if (!userNamRgEx.test(userNameValue)) {
        msgName.textContent = "please Enter your First and Last Name";
        msgName.style.visibility = "visible"
    } else {
        msgName.style.visibility = "hidden";
        nameValid = userNameValue;
    }

    // Email validation
    if (emailValue === "") {
        msgEmail.textContent = "This filed is Required";
        msgEmail.style.visibility = "visible"
    } else if (!emailRgEx.test(emailValue)) {
        msgEmail.textContent = "please Enter valid Email";
        msgEmail.style.visibility = "visible"
    } else {
        msgEmail.style.visibility = "hidden";
        emailValid = emailValue;
    }

    // password validation
    if (passwordValue === "") {
        msgPass.textContent = "This filed is Required";
        msgPass.style.visibility = "visible";
    } else if (!passRgEx.test(passwordValue)) {
        msgPass.textContent = "password Must contain at least 8 or more characters";
        msgPass.style.visibility = "visible";
    } else {
        msgPass.style.visibility = "hidden";
        passValid = passwordValue;
    }

    // Repeat  password validation
    if (repPasswordValue === "") {
        msgRepPass.textContent = "This filed is Required";
        msgRepPass.style.visibility = "visible";
    } else if (passwordValue !== repPasswordValue) {
        msgRepPass.textContent = "the password not matching";
        msgRepPass.style.visibility = "visible";
    } else {
        msgRepPass.style.visibility = "hidden";
        repPassValid = repPasswordValue;
    }

    if ( nameValid && emailValid && passValid && repPassValid ){
        setCookie("userName", userNameValue, "10/10/2024");
        setCookie("email", emailValue, "10/10/2024");
        setCookie("password", passwordValue, "10/10/2024");
        oPenloginPage()
    }
});