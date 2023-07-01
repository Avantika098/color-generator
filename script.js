function colorGenerator(){
    //clr code=hex code
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);//16 for hexadecimal
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("text").innerText=randomCode;
//    navigator.clipboard.writeText(randomCode);
//clr code copy ho jaega
}
document.getElementById("b").addEventListener(
    "click",
    colorGenerator
);

colorGenerator();