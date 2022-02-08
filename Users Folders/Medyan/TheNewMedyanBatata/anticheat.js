var leftBulletCount = 0;
var rightBulletCount = 0;

var FiringHackVideo = document.getElementById("superfireratehacking");
var FiringNormalVideo = document.getElementById("superfireratenormal");
var showHacksButton = document.getElementById("showHacksButton");
var showHacksButton1 = document.getElementById("showHacksButton1");
var representationText = document.getElementById("representationText");
var leftRedBox = document.getElementById("leftRedBox");
var rightRedBox = document.getElementById("rightRedBox");
var BulletCounterLeft = document.getElementById("BulletCounterLeft");
var BulletCounterRight = document.getElementById("BulletCounterRight");
var ResetButton = document.getElementById("ResetButton");

FiringNormalVideo.muted = true;
FiringNormalVideo.play();
FiringHackVideo.style.display = "none";
showHacksButton1.style.display = "none";
leftRedBox.style.display = "none";
rightRedBox.style.display = "none";
BulletCounterLeft.style.display = "none";
BulletCounterRight.style.display = "none";
ResetButton.style.display = "none";

showHacksButton.onclick = function () {
	FiringHackVideo.style.display = "initial";
	FiringHackVideo.currentTime = '0';
	FiringHackVideo.play();
	FiringNormalVideo.currentTime = '0';
	FiringNormalVideo.play();

	showHacksButton.style.display = "none";
	showHacksButton1.style.display = "block";

	representationText.innerHTML = "You can see now in the second clip a person hacking the firing rate of his weapon to make it faster than other players.";
}

showHacksButton1.onclick = function () {
	FiringHackVideo.currentTime = '0';
	FiringNormalVideo.currentTime = '0';

	showHacksButton1.style.display = "none";
	ResetButton.style.display = "block";
	leftRedBox.style.display = "block";
	rightRedBox.style.display = "block";
	BulletCounterLeft.style.display = "block";
	BulletCounterRight.style.display = "block";

	leftBulletCount = 0;
	rightBulletCount = 0;
	BulletCounterLeft.innerHTML = leftBulletCount;
	BulletCounterRight.innerHTML = rightBulletCount;

	representationText.innerHTML = "The anti-cheat has displayed two red boxes surrounding the bullets in the magazine and a counter for bullets fired. You can notice that for the hacking clip, the bullets in the magazine stays at \"90\" and the bullets fired counter is way off the charts.\nYou can now reset the representation with the button bellow";
}

ResetButton.onclick = function () {
	FiringHackVideo.currentTime = '0';
	FiringNormalVideo.currentTime = '0';

	showHacksButton.style.display = "block";

	FiringHackVideo.style.display = "none";
	ResetButton.style.display = "none";
	leftRedBox.style.display = "none";
	rightRedBox.style.display = "none";
	BulletCounterLeft.style.display = "none";
	BulletCounterRight.style.display = "none";

	representationText.innerHTML = "The following video is a representation of how our Anti-Cheat system works. The video on the right is how firing looks like in a normal game. Press the button below to start the representation."
}

function incrementLeftBullets() {
	leftBulletCount += 3;
	BulletCounterLeft.innerHTML = leftBulletCount;
}
function incrementRightBullets() {
	rightBulletCount += 1;
	BulletCounterRight.innerHTML = rightBulletCount;
}

setInterval(incrementLeftBullets, 1250);
setInterval(incrementRightBullets, 25);

function counterReset() {
	if (FiringNormalVideo.currentTime < '1') {
		leftBulletCount = 0;
		BulletCounterLeft.innerHTML = leftBulletCount;

	}
	if (FiringHackVideo.currentTime < '4.5' || FiringHackVideo.currentTime > '12') {
		rightBulletCount = 0;
		BulletCounterRight.innerHTML = rightBulletCount;
	}
}

setInterval(counterReset, 0);

