//Hashing

function hashingFunction() {
  
    const pwd = document.getElementById("tobehashed").value;
    let arr = pwd.split("");
    console.log(arr);
    let j=0;
    for(let i = 0; i<arr.length; i++)
    {

        arr[i] = arr[i].charCodeAt(0)+i%2*j%3 +j%2+1;
        if(arr[i]>'z'-10){arr[i]-'a'}
        arr[i] =  String.fromCharCode(arr[i]);
        if(i%2){j++}
    }

    console.log(arr);
    document.getElementById("hashpass").value=arr.join("");
}


//Password Generation

function colorRed() 
{
    document.getElementById("generate").style.color = "red";//changed id to generate
}

function genPassword(id) {

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("selectPassLength").value;
    passwordLength = parseInt(passwordLength);
    var pswd = "";

    for (var i = 0; i <= passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * chars.length);
        pswd += chars[randomNumber];
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


//Anticheat

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




//Encryption

const messagebox = document.querySelector(".message-box");
const encrypt_mssge = document.querySelector(".encrypted_message");
const encryptKey = document.querySelectorAll(".encryptKey input");
const decryptKey = document.querySelectorAll(".decryptKey input");
const phone1 = document.querySelector(".chats__phone1");
const phone2 = document.querySelector(".chats__phone2");
const phone3 = document.querySelector(".chats__phone3");

let letters = [" ",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

let encryptionKey = [0,0,0];
let decryptionKey = [0,0,0];
let messageText = [];

let cnt = 0;
let cnt1 = 0;

encryptKey.forEach(input => {input.addEventListener('click', function() {
  encryptionKey[input.id] = input.valueAsNumber; 
})});
encryptKey.forEach(input => {input.addEventListener('keyup', function() {
  encryptionKey[input.id] = input.valueAsNumber;
})});
decryptKey.forEach(input => {input.addEventListener('click', function() {
  decryptionKey[input.id] = input.valueAsNumber;
})});
decryptKey.forEach(input => {input.addEventListener('keyup', function() {
  decryptionKey[input.id] = input.valueAsNumber;
})});

const bobSend = mssge => {
  let BobCht = document.createElement("div");
  let BobMssg = document.createElement("div");
  BobCht.classList.add("Bob", "chat", "chat-sent");
  BobMssg.classList.add("Bob", "message-sent");
  BobMssg.innerText = mssge;
  BobCht.appendChild(BobMssg);
  phone1.appendChild(BobCht);
}

const hckrReceive = mssge => {
  let text = '';
   mssge.map(letter => {
    text += letter;
  });
  let serverCht = document.createElement("div");
  let serverMssg = document.createElement("div");
  serverCht.classList.add("Bob", "chat", "chat-sent");
  serverMssg.classList.add("Bob", "message-sent");
  serverMssg.innerText = text;
  serverCht.appendChild(serverMssg);
  phone2.appendChild(serverCht);
  console.log(text);
}

const AshlyReceive = mssge => {
  let AshCht = document.createElement("div"); 
  let AshMssg = document.createElement("div");
  AshCht.classList.add("Ashley","chat", "chat-received")
  AshMssg.classList.add("Ashley", "message-received");
  AshMssg.innerText = mssge;
  AshCht.appendChild(AshMssg);
  phone3.appendChild(AshCht);
}

function encrypt (messge = [], lock) {
  let encryptedText = [];
  let hold = 0;
  messge.map(letter => {
    hold = lock[cnt] + letters.indexOf(letter);
    while(hold > letters.length - 1){
      hold -= letters.length  - 1;
    }
    encryptedText.push(letters[hold]);
    cnt++;
    if(cnt === lock.length - 1){
      cnt = 0;
    } 
  });
  return encryptedText;
}

function decrypt(messages = [], unlockKey){
  let chr = "";
  let hold = 0;
  messages.map(message => {
    hold = letters.indexOf(message) - unlockKey[cnt1];
    console.log(letters.indexOf(message), unlockKey[cnt1]);
    while(hold < 0){
      hold += letters.length - 1;
      console.log(hold);
    }
   chr += letters[hold];
   cnt1++;
    if(cnt1 === unlockKey.length - 1){
      cnt1 = 0;
    } 
  });
  return chr;
}

const send = (mssge) => {
  let enkeys = [];
  messageToSend = encrypt(messageText, encryptionKey);
  enkeys = decrypt(messageToSend, decryptionKey);
  bobSend(enkeys);
  hckrReceive(messageToSend);
  AshlyReceive(enkeys);
  messagebox.value = "";
}

messagebox.addEventListener('keydown', function(e) {
  if(e.keyCode === 8){messageText.pop()}
  else if(e.keyCode === 13){send(messageText); messageText = [];}
  else{messageText.push(e.key);}
});



//Navigation
function displaydiv(index)
{
    let arr = document.querySelectorAll(".service");
    let len = arr.length;

    let i;
    for(i = 0; i < len; i++)
    {
        arr[i].style.display = "none";
    }
    
    arr[index].style.display = "flex";
}
