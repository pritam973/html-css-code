let str = "soUmIck"

// string length

console.log(str.length)

// convert to upper case

console.log(str.toUpperCase())

// convert to lower case

console.log(str.toLowerCase())

// get the first character

console.log(str[0])

// get the last character

console.log(str[str.length-1])

// template literals

let name = "Soumick"
let title = `roy` 
let age = 25

console.log(`My name is ${name} and I am ${age} years old`)
console.log(typeof(title))

// string trim

let str1 = "    hello    "
console.log(str1.trim())

// string replace

let str2 = "hello world"
console.log(str2.replace("world", "javascript"))

// string concatenation

let str3 = "hello"
let str4 = "world"
console.log(str3 + " " + str4)

// string includes

console.log(str2)
console.log(str2.includes("hello"))

// string split

console.log(str2.split(" "))

// string repeat

console.log(str3.repeat(3))

// string search

console.log(str2.search("world"))

// string to array

console.log(str2.split(""))

// Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name =

// “shradhakhapra”

// , username should be “@shradhakhapra13”

let fullName = prompt("Enter your full name: ")
let username = "@" + fullName + fullName.length;
console.log(username)

// Prompt the user to enter a sentence. Count the number of vowels in the sentence.

// eg: sentence = "Hello World"

// , vowel count should be 3

let sentence = prompt("Enter a sentence: ")
let vowelCount = 0
for(let i=0; i<sentence.length; i++){
    if(sentence[i]=='a'||sentence[i]=='e'||sentence[i]=='i'||sentence[i]=='o'||sentence[i]=='u'||sentence[i]=='A'||sentence[i]=='E'||sentence[i]=='I'||sentence[i]=='O'||sentence[i]=='U'){
        vowelCount++
    }
}

// let fullname = promt("Enter your full name ")
// let username = "@"+fullname+fullname.length
// document.getElementById("st").innerText = username
// console.log(username)
