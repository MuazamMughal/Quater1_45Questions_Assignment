/*
Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.
*/

// first adding names to array

let Names = ["Ahmed","Babar","Dawood","Caz","Erham"];
// sorting the array
let Nsort = Names.sort();
let  NamLenght = Nsort.length

//printing the sorted Array

console.log(Nsort);
// now consoling the all array

for(let i =0 ; i<NamLenght ; i++){
    console.log(Nsort[i])
}



