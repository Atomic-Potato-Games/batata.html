function hashingFunction() {
  
    const pwd = document.getElementById("pwd").value;
    let arr = pwd.split("");
    console.log(arr);
    for(let i = 0; i<arr.length; i++)
    {
        arr[i] = arr[i].charCodeAt(0)+1;
        arr[i] =  String.fromCharCode(arr[i]);
    }
    console.log(arr);
    document.getElementById("hashpass").value=arr.join("");
}