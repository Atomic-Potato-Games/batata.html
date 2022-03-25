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
