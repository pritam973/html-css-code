// let arr = ['mango','apple','banana','orange']
 
// let answear =  arr.map((fruit)=>{
//     return fruit.toUpperCase()
// })
// console.log(answear)
let arr = ['mango',10,16,'apple',89,'banana']
let type = arr.filter((n)=>{
    
    return typeof(n)==='string';
})
console.log(type);