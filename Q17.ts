/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
 print a message tothat person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list
 at the end of your program.
*/

import guestList2 from "./Q16";


let guestlist3 = guestList2
let Sizeguestlist3 = guestlist3.length
console.log(guestlist3 ,Sizeguestlist3 )

console.log(`I can invite only two people for dinner`)

//these are stil invited
for (let x =3; x <= Sizeguestlist3; x++) {

    console.log(`${x} sorry I canot invite you to dinner` ,guestlist3.pop() )
    
}

console.log(`still invited ${guestlist3[0]}`)
console.log(`still invited ${guestlist3[1]}`)

//Remove the last two names from your list

let arraylist= guestlist3
console.log(arraylist)
for(let y = 0 ; y = arraylist.length ; y++){
    arraylist.pop()
}
// the array is empty
console.log(`this is an empty array ${arraylist}`)
