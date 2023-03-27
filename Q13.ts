/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
stores several examples. Use your list to print a series of statements about theseitems,  such as “I would like to own a Honda motorcycle.”
*/
let FavTrans =["GR150","G-Sports","R1","CiviC1.8","Rapter"]

// getting the lenght of the list for loop

let listLengh = FavTrans.length

console.log("number of your fav things" + listLengh)

// foming rthe loop for printing

for( let i = 0 ; i < listLengh; i++ ){

console.log(`"I would like to own a ${FavTrans[i]} motorcycle.”"`)

}