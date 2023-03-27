/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at
 least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

// Create an array of guests
const guestList: string[] = ["Albert Einstein", "Oprah Winfrey", "Leonardo da Vinci","Imran Khan"];

// Loop through the array and print an invitation message to each guest using the for each function

guestList.forEach(guest => {

// guest in this represents the each particepents of list
 
  console.log(`Dear ${guest},\n You are invited to dinner at my place. Please join me for an evening of good food and great conversation.
  \nSincerely,\nMuazm Mughal\n`);

});