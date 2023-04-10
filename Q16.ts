/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list.
*/

// Create an array of guests
const guestList2: string[] = ["Albert Einstein", "Oprah Winfrey", "Leonardo da Vinci","Imran Khan"];

console.log(`this is the original guest list \n${guestList2}`)

// now some changings in the list, Replacing he name of guest

guestList2.splice(1,1, "nom chomsky");

// now the printing of the changed array
 console.log("\nthis is the updated list " +guestList2)

 //informing  people we have found the biger Dinner table now

console.log(`found a bigger dinner table\n ${guestList2}`)

//adding the new person at starting

guestList2.unshift("Dr Israr")

// adding the person in middle

guestList2.splice(2,0, "Sir  Zia");

// adding to the end

guestList2.push("sir Daniyal");

console.log( guestList2)

// Loop through the array and print an invitation message to each guest using the for each function

guestList2.forEach(guest => {

// guest in this represents the each particepents of list
 
  console.log(`Dear ${guest},\n You are invited to dinner at my place. Please join me for an evening of good food and great conversation.
 \nSincerely,\nMuazm Mughal\n`);

});

export default guestList2;


