/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the 
function make_great() with a copy of the array of magicians’ names. Because the 
original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name. 

*/
function make_Great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
  }
  
  function show_magicianS(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  const magicianNam: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
  const greatMagicianS: string[] = make_great([...magicianNames]); // Use the spread operator to create a copy of the original array
  show_magicians(magicianNames);
  show_magicians(greatMagicianS);
  