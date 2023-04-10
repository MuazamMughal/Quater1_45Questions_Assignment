/*
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result for each of the 
following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in a array 
• Test whether an item is not in a array
 */


// Tests for equality and inequality with strings
let animal: string = 'dog';
console.log("Is the animal a dog? I predict true.");
console.log(animal == 'dog');
console.log("Is the animal a cat? I predict false.");
console.log(animal != 'cat');

// Tests using the lower case function
let fruits: string = 'Apple';
console.log("Is the fruit an apple? I predict true.");
console.log(fruits.toLowerCase() == 'apple');
console.log("Is the fruit a banana? I predict false.");
console.log(fruits.toLowerCase() != 'banana');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let Num1: number = 10;
let Num2: number = 5;
console.log("Is num1 greater than num2? I predict true.");
console.log(Num1 > Num2);
console.log("Is num1 less than or equal to num2? I predict false.");
console.log(Num1 <= Num2);
console.log("Is num1 equal to num2? I predict false.");
console.log(Num1 == Num2);
console.log("Is num1 not equal to num2? I predict true.");
console.log(Num1 != Num2);

// Tests using "and" and "or" operators
let Sunny: boolean = true;
let Warm: boolean = true;
console.log("Is it sunny and warm outside? I predict true.");
console.log(Sunny && Warm);
console.log("Is it sunny or warm outside? I predict true.");
console.log(Sunny || Warm);
console.log("Is it not sunny or not warm outside? I predict false.");
console.log(!Sunny || !Warm);

// Test whether an item is in an array
let colors: string[] = ['red', 'blue', 'green'];
console.log("Is the color blue in the array? I predict true.");
console.log((colors.indexOf('blue') === 1));
console.log("Is the color yellow in the array? I predict false.");
console.log((colors.indexOf('yellow') === 1));

// Test whether an item is not in an array
let Fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is the fruit grape not in the array? I predict true.");
console.log((Fruits.indexOf('grape') === -1));
console.log("Is the fruit apple not in the array? I predict false.");
console.log((Fruits.indexOf('apple') === -1));