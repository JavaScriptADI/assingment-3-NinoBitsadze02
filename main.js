let randomNum = Math.random();
let numInt = Math.floor(randomNum * 10);
let userInput = prompt("Hello, can you guess the number between 1 and 10?");
let userNum = Number(userInput);
if (userNum === numInt) {
    console.log("Correct!");
} else if (userNum > numInt) {
    console.log("Too high. Try again!");
} else {
    console.log("Too low. Try again");
}


let inputSent = prompt("Write a sentence.");
let charLeng = inputSent.length;
let words = inputSent.split(" ");
let wordCount = words.length;
let include = inputSent.toLowerCase().includes("javascript");

if (include === true) {
    console.log("Your sentence consists of " + charLeng + " characters, " + wordCount + " words and includes 'JavaScript'.");
} else {
    console.log("Your sentence consist of " + charLeng + " characters, " + wordCount + " words and doesn't include 'JavaScript'.")
}


let numOne = Number(prompt("Enter the first number."));
let numTwo = Number(prompt("Enter the second number."));
let numThree = Number(prompt("Enter the third number."));
let smallest = Math.min(numOne, numTwo, numThree);
let largest = Math.max(numOne, numTwo, numThree);
let average = (numOne + numTwo + numThree) / 3;
let averageRounded = Math.round(average);
console.log("The smallest number is " + smallest + ", the largest number is " + largest + ", and the average rounded is " + averageRounded + ".");


let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
let password = " ";
let char1 = Math.floor(Math.random() * chars.length);
password += chars[char1];
let char2 = Math.floor(Math.random() * chars.length);
password += chars[char2];
let char3 = Math.floor(Math.random() * chars.length);
password += chars[char3];
let char4 = Math.floor(Math.random() * chars.length);
password += chars[char4];
let char5 = Math.floor(Math.random() * chars.length);
password += chars[char5];
let char6 = Math.floor(Math.random() * chars.length);
password += chars[char6];
let char7 = Math.floor(Math.random() * chars.length);
password += chars[char7];
let char8 = Math.floor(Math.random() * chars.length);
password += chars[char8];

console.log("Your password is: " + password);

let userAge = prompt("Enter your age.");
let ageNum = Number(userAge);
let ageGroup = " "
if (ageNum <= 12) {
    ageGroup = "Child";
} else if (ageNum <= 18) {
    ageGroup = "Teenager";
} else if (ageNum <= 64) {
    ageGroup = "Adult";
} else {
    ageGroup = "Senior";
}

console.log("You are classified as: " + ageGroup);