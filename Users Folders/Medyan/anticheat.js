/*
var username = prompt("Type in your username:");
alert("Your username is " + username + "\nPoggers! thats my name as well!");

document.getElementById("potatoButton").onclick = function(){
	document.getElementById("potatoParagraph").innerHTML = "Glory to the potato kingdom!";
	document.getElementById("potatoButton").style.display = "none";
}
*/


var FiringHackVideo = document.getElementById("superfireratehacking");
var FiringNormalVideo = document.getElementById("superfireratenormal");
var showHacksButton = document.getElementById("showHacksButton");
var showHacksButton1 = document.getElementById("showHacksButton1");
var representationText = document.getElementById("representationText");

FiringNormalVideo.muted = true;
FiringNormalVideo.play();
FiringHackVideo.style.display = "none";
showHacksButton1.style.display = "none";

showHacksButton.onclick = function()
{
	FiringHackVideo.style.display = "initial";
	FiringHackVideo.play();
	FiringNormalVideo.currentTime = '0';
	FiringNormalVideo.play();

	showHacksButton.style.display = "none";
	showHacksButton1.style.display  = "block";

	representationText.innerHTML = "You can see now in the second clip a person hacking the firing rate of his weapon to make it faster than other players."
}

showHacksButton1.onclick = function()
{
	FiringHackVideo.currentTime = '0';
	FiringNormalVideo.currentTime = '0';
	representationText.innerHTML = "The anti-cheat has displayed two red boxes surrounding the bullets in the magazine and a counter for bullets fired. You can notice that for the hacking clip, the bullets in the magazine stays at \"99\" and the bullets counter is way off the charts."
}

