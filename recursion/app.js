'use strict';

// Challenge 1

//  amazon interview challenge (count islands). 

let arr = [[1, 1, 0, 0],
[0, 0, 0, 1],
[1, 0, 0, 0],
[0, 0, 0, 0]];


function helper(arr, i, j) {
  if (i < 0 || j < 0 || i >= arr[0].length || j >= arr.length || arr[i][j] === 0) {
    return;
  } else {
    arr[i][j] = 0;
    helper(arr, i + 1, j);
    helper(arr, i - 1, j);
    helper(arr, i, j + 1);
    helper(arr, i, j - 1);
  }
}

function findIsland(arr) {
  let islands = 0;
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        // console.log(islands);
        helper(arr, i, j);
        islands += 1;
      }
    }
  }
  return islands;
}

findIsland(arr);

// Challenge 2

// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument.For instance, replicate(3, 5) should return [5, 5, 5].If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

function replicate(times, number) {
  console.log(times, number)
  if (times < 0) {
    return []
  }
  let newArr = [];
  return help(newArr, times, number);
}

function help(newArr, times, number) {
  if (times === 0) {
    return newArr
  } else {
    newArr.push(number)
    return help(newArr, times - 1, number);
  }

}

// Challenge 3

// Write a function with takes a number and and adds up all the numbers form 0 to passed number and return their sum

function recursiveRange(n) {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
}
// or
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

// Challenge 4

// Wrire a function called power which accepts a base and exponent. The function should retern a power of the base to exponent.The function should mimic functionality of Nath.pow() - do no worry about negative bases and exponents.

function power(n, times) {
  if (times === 0) return 1;
  return n * power(n, times - 1)
}

power(2, 3) 

// Challenge 5

// Write a function which tekes arr of numbers and should return product of the numbers.

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}


// Challenge 6

// Write a function which takes str and should retern reverse str

function reverse(str, first = 0, end = str.length - 1) {
  if (first > end || first === end) {
    return str.join("");
  }
  if (typeof (str) === "string") {
    str = str.split("");
  }
  let temp = str[first];
  str[first] = str[end];
  str[end] = temp;
  return reverse(str, first + 1, end - 1);
}
reverse(str);


// Challenge 7

//  Write a function is Palinrome which return true if the string passed is palindrome(read the same word and backward) or false if not.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}
// or
function isPalindrome(string, first = 0, last = string.length - 1) {
  if (string.length <= 1 || first > last) {
    return true;
  }
  if (string[first] !== string[last]) {
    return false;
  }
  return isPalindrome(string, first + 1, last - 1);
}
isPalindrome(string)


// Challenge 8

// Wrie a function called nestedEvenSum. Return the sum of numbers in all even numers in object which may contains nested object.

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

