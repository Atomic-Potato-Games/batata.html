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

function show_more()
{
    
    let arr = document.getElementsByClassName("more");

    for(let i = 0; i < arr.length; i++)
    arr[i].style.display="block";
    document.getElementById("moreB").style.display="none";
}
function show_less()
{
    
    let arr = document.getElementsByClassName("more");

    for(let i = 0; i < arr.length; i++)
    arr[i].style.display="none";

    document.getElementById("moreB").style.display="block";
}