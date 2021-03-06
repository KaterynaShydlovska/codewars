// # Deli Counter Lab

// ## Objectives
// 1. Add elements to an array
// 2. Return items from an array
// 3. Iterate through an array
// 4. Pass an array as a function parameter

// ## Instructions

// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.

// At the beginning of the day, the deli is empty and is represented by an empty array, like `var katzDeliLine = [];`. However,  you don't need to code the array as a variable, since the test scripts will create it and pass it to the functions you are about to build. 


// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`

// ### Hint

// Example usage:

// ```javascript
// var katzDeliLine = [];
function takeANumber(currentLine, name){
    currentLine.push(name);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
   }
   
   function nowServing(currentline, name){
     let out = "Currently serving ";
     if(currentline.length === 0){
       return "There is nobody waiting to be served!"
     }else{
      return out + currentline.shift() + ".";
     }
    
   }
   
   function currentLine(currentLine){
     let str = 'The line is currently: ';
   if(currentLine.length === 0){
     return "The line is currently empty."
   }else{
     for(let i=0; i< currentLine.length; i++ ){
      str += i+1 + '. ' + currentLine[i];
      if(i !== currentLine.length -1){
        str += ', '
      }
     }
   }
   
   return str;
     
   }

// takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
// takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
// takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

// currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

// nowServing(katzDeliLine); // "Currently serving Ada."

// currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

// takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

// currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

// nowServing(katzDeliLine); // "Currently serving Grace."

// currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz";
```





var kittens = ['Milo', 'Otis', 'Garfield'] 
//define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
return kittens.concat([name]);
}

function prependKitten(name){
return [name].concat(kittens);
}

function removeLastKitten(name){
return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(name){
return kittens.slice(1, kittens.length);
}


