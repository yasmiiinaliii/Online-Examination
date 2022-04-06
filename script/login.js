var loginBtn = document.getElementById ('loginBtn');

var email = document.getElementById("LogEmail");
var password = document.getElementById("Logpassword");

var loMsgEmail = document.getElementById('LogMsgEmail')
var logMsgPass = document.getElementById('LogMsgPass')

function handleEmailValidMsg(){
    var emailValue = email.value;
    if (emailValue === "") {
        loMsgEmail.textContent = "please Enter your Email"
        loMsgEmail.style.visibility = "visible";
    }
    else if ( emailValue !== getCookie ("email"))
    {
        loMsgEmail.textContent = "Email is not correct"
        loMsgEmail.style.visibility = "visible";
    }
    else{
        loMsgEmail.style.visibility = "hidden";
        emailValid = true;
    }

}
function handlePassValidMsg(){
    var passvalue = password.value;
    
    if (passvalue === "") {
        logMsgPass.textContent = "please Enter your Password"
        logMsgPass.style.visibility = "visible";
    }
    else if ( passvalue!== getCookie ("password"))
    {
        logMsgPass.textContent = "The password is not correct please try again!"
        logMsgPass.style.visibility = "visible";
    }
    else{
        logMsgPass.style.visibility = "hidden";
        passValid = true;
    }

    if (emailValid && passValid) {
        window.open("ready-page.html", "_self");
    }
}

loginBtn.addEventListener('click',function(){

    var emailValue = email.value;
    var passvalue = password.value;

    var emailValid = false;
    var passValid = false;

    if (emailValue === "") {
        loMsgEmail.textContent = "please Enter your Email"
        loMsgEmail.style.visibility = "visible";
    }
    else if ( emailValue !== getCookie ("email"))
    {
        loMsgEmail.textContent = "Email is not correct"
        loMsgEmail.style.visibility = "visible";
    }
    else{
        loMsgEmail.style.visibility = "hidden";
        emailValid = true;
    }

    if (passvalue === "") {
        logMsgPass.textContent = "please Enter your Password"
        logMsgPass.style.visibility = "visible";
    }
    else if ( passvalue!== getCookie ("password"))
    {
        logMsgPass.textContent = "The password is not correct please try again!"
        logMsgPass.style.visibility = "visible";
    }
    else{
        logMsgPass.style.visibility = "hidden";
        passValid = true;
    }

    if (emailValid && passValid) {
        window.open("ready-page.html", "_self");
    }

})