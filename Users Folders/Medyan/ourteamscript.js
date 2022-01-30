var emailBox = document.getElementById("emailbox");
var emailNotification = document.getElementById("emialnotification");

emailBox.onkeydown = function(event)
{
    if(event.key == "Enter")
        alert("Enter pressed")
        emailNotification.style.display = "block";
}