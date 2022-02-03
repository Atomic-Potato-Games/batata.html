//Navigation
var navigation = document.getElementById("navigation");
var navButton = document.getElementById("navbutton");
var navIsOn = false;

//Top Button
var topButton =  document.getElementById("topButton");

navButton.onclick = function()
{
    if(!navIsOn)
    {
        navigation.style.display = "initial";
        navIsOn = true;
    }
    else
    {
        navigation.style.display = "none";
        navIsOn = false;
    }
}

//hiding and displaying the button
window.onscroll = function()
{
    //first condition is for safari browser, the other is for the more popular and common browsers
    //iam copy pasting this, but im just stating iam aware of this
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";
}

//Clicking the button
topButton.onclick = function()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}