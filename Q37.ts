/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt and a 
medium shirt with the default message, and a shirt of any size with a different 
message. 
*/

function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {

    console.log(`Make a ${size} shirt with the message: "${message}"`);
  }
  
   make_shirt();
  
  // make a medium shirt, default message
  make_shirt('medium');
  
  // make a shirt of any size, different message
  make_shirt('small', 'Pakistan');
  