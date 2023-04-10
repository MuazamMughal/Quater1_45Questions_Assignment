/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

// Create an array of guests
const guestList1: string[] = ["Albert Einstein", "Oprah Winfrey", "Leonardo da Vinci","Imran Khan"];

console.log(`this is the original guest list ${guestList1}`)

// now some changings in the list, Replacing he name of guest

guestList1.splice(1,1, "nom chomsky");

// now the printing of the changed array
 console.log("this is the updated list " +guestList1)

// Loop through the array and print an invitation message to each guest using the for each function

guestList1.forEach(guest => {

// guest in this represents the each particepents of list
 
  console.log(`Dear ${guest},\n You are invited to dinner at my place. Please join me for an evening of good food and great conversation.
 \nSincerely,\nMuazm Mughal\n`);

});