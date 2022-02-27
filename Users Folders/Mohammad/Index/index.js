

var counter = 1;
setInterval(display, 8000);

var mouse = false;
function mouseStatus(n) {
    mouse = n;
}



function display() {
    if (!mouse) {
        document.getElementById('div' + (counter % 5)).style.display = "none";
        counter++;
        if (counter % 5 == 0) {
            counter = 1;
        }
        // document.getElementById("password1").value = counter % 5;

        document.getElementById('div' + (counter % 5)).style.display = "flex";
        document.getElementById('div' + (counter % 5)).style.opacity = ".4"

        document.getElementById('div' + (counter % 5)).style.opacity = "1"
    }





}






