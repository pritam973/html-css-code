let arr = [67324,535556,14,5352,525321425,145,1,4246,,5758,]
let answear = arr.filter((number)=>{
    if(number % 2 !== 0)
    {
        return true;
    }
    else{
        return false;
    }
})
console.log(answear);