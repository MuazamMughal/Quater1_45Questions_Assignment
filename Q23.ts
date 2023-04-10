/*
23. Conditional Tests: Write a series of conditional tests. Print a statement 
describing each test and your prediction for the results of each test. Your code 
should look something like this: 
let car = 'subaru'; 
console.log("Is car == 'subaru'? I predict True.") 
console.log(car == 'subaru') 
• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 
*/

let car = 'subaru';
let age = 25;
let hasLicense = true;
let isLoggedIn = false;
let color = 'red';
let fruit = 'apple';
let pets = ['dog', 'cat'];
let hasPets = true;
let isSummer = true;
let isRainy = false;

console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is age <= 21? I predict true.");
console.log(age <= 21);

console.log("Is hasLicense == true? I predict true.");
console.log(hasLicense == true);

console.log("Is isLoggedIn != true? I predict true.");
console.log(isLoggedIn =! true);

console.log("Is color == 'red' or fruit == 'banana'? I predict true.");
console.log(color == 'red' || fruit == 'banana');

console.log("Is pets.length > 0 and hasPets == true? I predict true.");
console.log(pets.length > 0 && hasPets == true);

console.log("Is isSummer == true and isRainy = true? I predict true.");
console.log(isSummer == true && isRainy == false);

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

console.log("Is age < 18? I predict false.");
console.log(age < 18);

console.log("Is isLoggedIn != true? I predict true.");
console.log(isLoggedIn != false);
