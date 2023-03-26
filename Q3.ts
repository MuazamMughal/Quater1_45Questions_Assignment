//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName1 :string ="muazam mughal";
// in the lower case
let upper :string = PersonName1.toUpperCase();
console.log(upper);

// to lower case

let lower = PersonName1.toLowerCase();
console.log(lower)

//to title case

console.log(PersonName1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

//in this title case we split the array by space then using map funtion, itreate bothwords by our conditions and using the join function 
//combine the both split words in one
