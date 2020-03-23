'use strict';

// Challenge 1

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// Example 1:
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

let n = 555;

function difference(n) {
  let sum = 0;
  let mult = 1;
  let nums = n.toString().split('');
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
    mult *= parseInt(nums[i]);

  }
  // console.log(sum)

  return (mult - sum);
}

difference(n);

function test(str) {
  let add = 0
  let mult = 1
  let numbers = str.split().forEach(el => {
    add += parseInt(el);
    mult = mult * parseInt(el);
  });
  console.log(mult, add)
  return mult - add;
}
test("6655");


// Challenge 2

// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

function countSteps(num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    steps += 1;
  }
  return steps;
}


// Challenge 3

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  function multiply(n) {
    return n.reduce(function (a, b) { return a * b; });
  }
  let count = 0;

  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count++;
  }
  return count;
}

// function persistence(num) {
//   let times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }

//   return times;
// }


// Challenge 4

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b) {
  let count = 0;
  if (a === b) {
    return a;
  }
  else if (a < b) {
    for (a; a <= b; a++) {
      count += a;
    }
  }
  else if (b < a) {
    for (b; b <= a; b++) {
      count += b;
    }
  }

  return count;
}

// Challenge 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//   Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;
  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    };
  }
  return sum;
}

// Challenge 6

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function (n) {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// Examples
isSquare(-1) //returns //false
isSquare(0) //returns   //true
isSquare(3) //returns   //false
isSquare(4) //returns   //true
isSquare(25) //returns  //true  
isSquare(26) //returns  //false


//  ? = if, correct : wrong
let a = 7 > 3 ? true : false
console.log(a)

// Find the greatest common divisor of two positive integers.The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x, y) {
  if (x === y) {
    return x
  } else {
    return helper(x, y);
  }
}

function helper(smaller, bigger) {
  while (bigger) {
    var t = bigger;
    bigger = smaller % bigger;
    smaller = t;
  }
  return smaller;
}

// Given the triangle of consecutive odd numbers:

//           1
//       3      5
//     7     9    11
//  13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index(starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n * n * n
}