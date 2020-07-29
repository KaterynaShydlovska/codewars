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

// Challenge 16

// In this Kata we are passing a number(n) into a function.

// Your code will determine if the number passed is even(or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats are considered UNeven for this kata.

function testEven(n) {
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Challenge 17

// Determine the total number of digits in the integer(n >= 0) given as input to the function.For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.Be careful to avoid overflows / underflows.

// All inputs will be valid.

function digits(n) {
  let str = n.toString();
  return str.length;
}


// Challenge 18

// Task
// Given three integers a, b, c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words, try every combination of a, b, c with [* +()], and return the Maximum Obtained
// Consider an Example:
// With the numbers are 1, 2 and 3, here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range(1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
//   It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur.
// You cannot swap the operands.For instance, in the given example you cannot get expression(1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
  let arr = [];
  console.log(a, b, c);
  arr.push(a * (b + c));
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push((a + b) * c);
  arr.push(a + b + c);
  return Math.max(...arr);

}


// Challenge 19

// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

//   Example:

//   Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function (n, counter = 0) {
  let str = n.toString().split('');
  let sum = 0;
  if (counter > 20) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    sum += str[i] ** 2;
  }
  if (sum === 1) {
    return true;
  } else {
    counter++
    return isHappy(sum, counter);
  }
};

// Challenge 20

// Wrire a function called power which accepts a base and exponent. The function should retern a power of the base to exponent.The function should mimic functionality of Nath.pow() - do no worry about negative bases and exponents.

function power(n, times) {
  let output = 1;
  if (times === 0) {
    return 1;
  } else {
    while (times > 0) {
      output*= n;
      times--
    }
  }
  return sum;
}

power(n, times);



// Challenge 21

// Wrire a function factorial which accepts a number and return the factorial of that number. The factorial is the product of the integer and all the integers below it; (4!) === 4*3*2*1 === 24.
//  Factorial zero (0!) always === 1!


function factorial(f) {
  if (f === 1 || f === 0) return 1;
  return f * factorial(f - 1);

}

//  or 
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}


// Challenge 22

// Given a positive integer n, calculate the following sum:

// n + n / 2 + n / 4 + n / 8 + ....
// All elements of the sum are the results of integer division.

//   Example
// 25  => 25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  var sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}


// Challenge 23

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  let s = x.toString();
 let i=0;
  let j= s.length-1;
  
  while(i < j){
      if(s[i] !== s[j]){
        return false;
      }else{
          i++;
          j--;
      }
  }
  return true;
};


// Challenge 24

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


var reverse = function(x) {
  let ans = parseInt(x.toString().split('').reverse().join('').toString());

  if (x < 0) { ans *= -1; }

  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};

// Challenge 25

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

function reverseBits (n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}


// Challenge 26

// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
  if(n === 0){
  return n;
  } else {
  return Math.ceil(n / 5) * 5; 
  }
}

//  Chalenge 27

// No Story
// No Description
// Only by Thinking and Testing
// Look at the result of testcase, guess the code!

//Hmm.. 0 * 1 = 0
// Test.assertEquals(testIt(0,1), 0)

 //Yes, 1 * 2 = 2
// Test.assertEquals(testIt(1,2), 2)

// I know, 5 * 6 = 30
// Test.assertEquals(testIt(5,6), 30)

// What? 10 * 10 = 1 ?
// Test.assertEquals(testIt(10,10), 1)

// Damn.. 200 * 200 = 4, 0 was omitted ?
// Test.assertEquals(testIt(200,200), 4)

// Discover the mysteries of it ;-)
// Test.assertEquals(testIt(12,34), 21)

// You can solve it
// Test.assertEquals(testIt(123,45),54)

// And click ATTEMPT for more challenge..

function testIt(a,b){
  let newA = a.toString().split('');
  let newB = b.toString().split('');
  let sumA = 0;
  let sumB = 0;
  for(let i=0; i< newA.length; i++){
    sumA+=parseInt(newA[i]);
  }
  for(let j=0; j< newB.length; j++){
    sumB+=parseInt(newB[j]);
  }
  console.log(sumA, sumB)
  return sumA* sumB;
  }
  
  console.log(testIt(123,45));

  // Challenge 28

//   In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}


 // Challenge 29

// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

// arrow

// a and b are integers and > 0

// Write a function which returns the area of the arrow.

function arrowArea(a,b) {
  // your code
  return a * b / 4;
}