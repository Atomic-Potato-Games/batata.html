var emailBox = document.getElementById("emailbox");
var emailNotification = document.getElementById("emailnotification");

emailBox.onkeydown = function(event)
{
    if(event.key == "Enter")
        emailNotification.style.display = "block";
}