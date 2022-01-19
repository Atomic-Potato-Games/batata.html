const charge = main()

function read_Input()
{
    let password = document.getElementById("Password").value;
    return password;
}

function passCheck() {

    let str = read_Input();

    if (str.length < 8)
        return 0;

    var flag_lowercase = 0;
    var flag_uppercase = 0;
    var flag_number = 0;
    var flag_symbol = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && 'z' >= str[i]) { flag_lowercase = 1; continue; }
        if (str[i] >= 'A' && 'Z' >= str[i]) { flag_uppercase = 1; continue; }
        if (str[i] >= '0' && '9' >= str[i]) { flag_number = 1; continue; }
        if ((str[i] >= '!' && '/' >= str[i]) || (str[i] >= ':' && '@' >= str[i]) || (str[i]>='[' && '`'>=str[i]) || (str[i]>='{' && '~'>=str[i])) { flag_symbol = 1; continue; }
    }
    //'!'//'/'

    sum = (flag_lowercase + flag_number + flag_uppercase + flag_symbol);
    return sum;
}

function setMeter()
{
    document.getElementById("Meter").value = passCheck();
}

function main() {
    const button = document.getElementById('Button');
    button.addEventListener("click", setMeter);
    return 1;
}