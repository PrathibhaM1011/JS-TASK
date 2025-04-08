const str = "sandhya"
const str2 = str.padStart(9, "$");

console.log(str.slice(2))
console.log(str.replace("sandhya", "k"))
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.includes("hy"))
console.log(str.indexOf("dh"))
console.log(str.startsWith("s"))
console.log(str.trim())
console.log(str2)
console.log(str.charAt(2))
console.log(str.charCodeAt(2))
console.log(str.split("d"))
console.log(str.repeat(2))



let string = "prathibha"
// How do you find the length of a string in JavaScript?

console.log(string.length)
//What does the toUpperCase() method do?
// changes the string to all capital letters

// How do you convert "HELLO" to lowercase?

const  string2 = "HELLO"

console.log(string2.toUpperCase())

// What does slice(2, 5) do in "javascript"?

const string3 =  "javascript"

console.log(string3.slice(2,5))

// What will console.log("apple".charAt(3)) output?
// l

// What does "hello world".includes("world") return?
// true

// How do you replace "hello" with "hi" in "hello world"?

console.log("hello world".replace("hello", "hi" ))

// What will "banana".indexOf("n") return?
// 2

// How do you remove spaces from both ends of " hello "?

console.log(" hello ".trim())

// What happens if you call "test".charAt(10)?

console.log("test".charAt(10)) 
//returns empty space

// What is the output of "abc".repeat(3)?
// abcabcabc

// How do you check if a string starts with "js"?
console.log("jsmain".startsWith("js"))

// What is the difference between slice() and substring()?
//for slice we can give -ve index but for substring we cant

// How do you split "apple,banana,grape" into an array?

let string4 = "apple,banana,grape"

console.log(string4.split())

// What is the Unicode value of "A" in JavaScript?
console.log("A".charCodeAt(0)); // 65


// What does padStart(8, "0") do to "123"?
// "00000000123"

// How can you reverse a string in JavaScript?
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("string3"));

















