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


// or 

var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) return true;
  }
  return false;
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


// Challenge 7

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


// Challenge 8

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

// Challenge 9

// You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if ((mpg * fuelLeft) >= distanceToPump) {
    return true
  } else {
    return false;
  }
};


// Challenge 10

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

//   E.g.If we have an array[1, 2, 3, 4, 6, 7, 8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers.The numbers will also all be unique and in ascending order.The numbers could be positive or negative and the first non - consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both[] and[x] though ? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python: None
// Julia: nothing
// Nim: none(int)(See options)

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}


// Challenge 11

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number.Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.This is only applicable to the natural numbers.

//   Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {
  let arrStr = n.toString().split('');
  let temp = 0;
  for (let i = 0; i < arrStr.length; i++) {
    temp += parseInt(arrStr[i]);
  }
  if (("" + temp).length > 1) {
    return digital_root(temp)
  }
  return temp;


}

// Challenge 12

// It's too hot, and they can't even…
// One hot summer day Pete and his friend Billy decided to buy watermelons.They chose the biggest crate.They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

// Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

// Example: the boys can divide a stack of 8 watermelons into 2 + 6 melons, or 4 + 4 melons.

// The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

// Task
// Given an integral number of watermelons w(1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

//   Examples
// divide(2) === false // 2 = 1 + 1
// divide(3) === false // 3 = 1 + 2
// divide(4) === true  // 4 = 2 + 2
// divide(5) === false // 5 = 2 + 3
// divide(6) === true  // 6 = 2 + 4

function divide(weight) {
  if (weight > 2 && weight % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Challenge 13

// Find Numbers with Even Number of Digits

// Example 1:

// Input: nums = [12, 345, 2, 6, 7896]
// Output: 2
// Explanation:
// 12 contains 2 digits(even number of digits). 
// 345 contains 3 digits(odd number of digits). 
// 2 contains 1 digit(odd number of digits). 
// 6 contains 1 digit(odd number of digits). 
// 7896 contains 4 digits(even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
//   Example 2:

// Input: nums = [555, 901, 482, 1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

var findNumbers = function (nums) {
  let even = 0;
  let out = nums.toString().split(',')
  console.log(out)
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    let temp = '';
    temp += nums[i];
    console.log(temp)
    if (temp.length % 2 === 0) {
      even += 1;
    }
  }


  return even;

};



// Challenge 14

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
//   Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

var subtractProductAndSum = function (n) {
  let sum = 0;
  let mult = 1;
  let newN = n.toString().split('');
  for (let i = 0; i < newN.length; i++) {
    sum += parseInt(newN[i]);
  }
  console.log(sum)
  for (let j = 0; j < newN.length; j++) {
    mult *= parseInt(newN[j]);
  }
  console.log(mult)
  return mult - sum;
};

// Challenge 15

// Your classmates asked you to copy some paperwork for them.You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need.

//   Example:
// paperwork(5, 5) == 25
// Note: if n < 0 or m < 0 return 0!

// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
  } return n * m;

}
