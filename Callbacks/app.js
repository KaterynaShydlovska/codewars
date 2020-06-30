'use strict';

const fs = require('fs');
/* 
  Write a function called isEven that receives 2 parameters:
    A Number
    A Callback function


  Determine if the number is even. If so, invoke the callback with true as an argument, otherwise, false
  */

let isEven = (num, callback) =>{
  if(num % 2 === 0){
    callback(true);
  } else{
    callback(false)
  }
}

/*

  Create an array of numbers.

  Iterate the array with a for loop, each time calling the isEven function with the number and a callback
  
  The callback should console.log() the return value from isEven()

*/
function callback(arg){
  console.log(arg)
}

let arr = [1,2,3,4,5,6,7]

for(let i =0; i< arr.length; i++){
  isEven(arr[i], callback)
}





/* 
  Write a function called contents that receives 1 parameter:
    A File Name

  Using the fs module, open and read the contents of the file,converting them to text and printing the content to the console.

  Print a console.error() if anything goes wrong.

  You can test this by calling your function with './words.txt', which is a file that exists, and then again with the name of a file that does not exist.
*/

let contents = (file) =>{
  fs.readFile(file, (err, data) => {
    if(err) { console.error(err)}
    console.log(data.toString())
  })
}
contents('./words.txt');
// console.log('bla la')

