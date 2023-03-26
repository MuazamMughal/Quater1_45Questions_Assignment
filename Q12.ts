/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message
 should be personalized with the person’s name.*/

 let FrndNames = ["Ahmed","Babar","Dawood","Caz","Erham"];

 let  NamesLenght = FrndNames.length

 //Now printing the message for friends

 for(let i =0 ; i<NamesLenght ; i++){

    console.log(`Hello My Dear Friend ${FrndNames[i]}`);
}
