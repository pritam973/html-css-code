var repeat = 1

while(repeat)
{
    let x = prompt("Enter Your Age")
if (x>=18)
{
    alert("you can drive ")
}
if(x<0){
    console.error("invalid age")
}
else{
    alert("you cannot drive ")

}
repeat =  confirm("do you want to countinue?")
   
}
