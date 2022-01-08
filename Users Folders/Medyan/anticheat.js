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

FiringNormalVideo.muted = true;
FiringNormalVideo.play();
FiringHackVideo.style.display = "none";

document.getElementById("videoPlayButton").onclick = function(){
	FiringHackVideo.style.display = "inline";
	FiringHackVideo.play();
	FiringNormalVideo.currentTime = '0';
	FiringNormalVideo.play();
}

