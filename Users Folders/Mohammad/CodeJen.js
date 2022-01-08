


function colorRed() {
    document.getElementById("button").style.color = "red";
}
function genPassword(id) {

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("selectPassLength").value;
    passwordLength = parseInt(passwordLength);
    var pswd = "";

    for (var i = 0; i <= passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * chars.length);
        pswd += chars.substring(randomNumber, randomNumber + 1);


    }
    document.getElementById(id).style.backgroundColor = "lightgreen";


    document.getElementById(id).value = pswd;



}
function appear(id) {
    document.getElementById(id).style.color = "black";
}

function genPasswords() {

    genPassword("password");

    genPassword("password1");

    genPassword("password2");
    genPassword("password3");
    genPassword("password4");
    genPassword("password5");
}

