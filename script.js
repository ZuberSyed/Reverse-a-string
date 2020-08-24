function reverseStr(){
   const Result = document.getElementById('result');
   const Str = document.getElementById('str').value;
    let reversedStr ="";
    for(let i=Str.length-1 ; i>=0;i--){
        reversedStr += Str[i];
    }
    return Result.innerHTML =  reversedStr;
}

