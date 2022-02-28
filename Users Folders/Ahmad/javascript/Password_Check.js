function read_Input()
{
    let password = document.getElementById("Password").value;
    return password;
}

function passCheck() {

    let str = read_Input();

    var flag_lowercase = 0;
    var flag_uppercase = 0;
    var flag_number = 0;
    var flag_symbol = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && 'z' >= str[i]) { flag_lowercase = 1; continue; }
        if (str[i] >= 'A' && 'Z' >= str[i]) { flag_uppercase = 1; continue; }
        if (str[i] >= '0' && '9' >= str[i]) { flag_number = 1; continue; }
        if ((str[i] >= '!' && '/' >= str[i]) || (str[i] >= ':' && '@' >= str[i]) || (str[i]>='[' && '`'>=str[i]) || (str[i]>='{' && '~'>=str[i])) { flag_symbol = 1;}
    }
    //'!'//'/'

    sum = (flag_lowercase + flag_number + flag_uppercase + flag_symbol)*str.length;
    return sum;
}

function setMeter()
{
    let strength = passCheck();
    let arr = document.getElementsByClassName("meter");
    let meter = 0;
    if (strength > 0){meter = 1;}
    if (strength > 15){meter = 2;}
    if (strength > 23){meter = 3;}
    if (strength > 48){meter = 4;}
    if (strength >= 60) {meter = 5;}

    let i;
    for(i = 0; i < arr.length; i++)
    arr[i].style.display = "none";

    console.log(i);

    arr[meter].style.display = "inline";

    if(meter == 5){getElementById("Password").style.border_top.color = "#9615DB"}
    if(meter == 5){getElementById("Password").style.border_top.color = "yellow"}
}