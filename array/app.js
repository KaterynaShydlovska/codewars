'use strict';
// Challenge 1

// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (el) => el.reduce((a, b) => a ^ b);

// Challenge 2

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.Each integer represents a customer, and its value is the amount of time they require to check out.
//   n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.

//   Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly:)

// Examples
// queueTime([5, 3, 4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10, 2, 3, 3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2, 3, 10], 2)
// should return 12

function queueTime(customers, registers) {
  let arr = [];

  for (let i = 0; i < registers; i++)
    arr[i] = 0;

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}

//or

let arr = [];

const shortestQueueIndex = () => arr.indexOf(Math.min(...arr));

const addCustomer = (customer) => {
  arr[shortestQueueIndex()] += customer;
};

function queueTime(customers, n) {
  arr = new Array(n);
  arr.fill(0);
  customers.forEach(addCustomer);
  return Math.max(...arr);
}

// Challenge 3

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

var moveZeros = function (arr) {
  let i = 0;
  let j = i + 1;
  while (j <= arr.length - 1) {
    if (arr[i] !== 0 && arr[j] !== 0) {
      i++;
      j++;
    } else if (arr[i] !== 0 && arr[j] === 0) {
      i++;
      j++;
    } else if (arr[i] === 0 && arr[j] !== 0) {
      swap(arr, i, j)
      i++;
      j++;
    } else if (arr[i] === 0 && arr[j] === 0) {
      j++;
    }
  }
  return arr;
}


// Challenge 4

// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index. Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers( with 0 - based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8, 0, 2, 5]
// output: 2 # since array[2] == 2

// input: [-1, 0, 3, 6]
// output: -1 # since no index in array satisfies array[index] == index

function indexEqualsValue(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === i) {
      return i
    }
  }
  return -1;
}

// up to 150ms

// Challenge 5

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.


// var maxSequence = function (arr) {
//   var curr_max = 0, max_so_far = 0;

//   for (var i = 0; i < arr.length; i++) {
//     curr_max = Math.max(0, curr_max + arr[i]);
//     max_so_far = Math.max(curr_max, max_so_far);
//   }
//   return max_so_far;
// }

function maxSequence(arr) {
  let max = 0;
  if (arr === []) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {

      sum += arr[j]
      if (sum > max) {
        max = sum
      }
    }
  }

  return max
}

// Challenge 6

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  let arr = [];
  let min = Math.min.apply(null, ages);
  let max = Math.max.apply(null, ages);
  let dif = max - min;
  arr.push(min, max, dif)
  return arr;

}

differenceInAges([82, 15, 6, 38, 35]);

// Challenge 7

// Given an array(a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
// If n is not in the given array, return an empty array[].
// Assume that n and all values in the given array will always be integers.
//   Example:
// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
  let pos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      pos.push(i)
    }
  }
  return pos;
}

// Challenge 8

// Your task is to find all the elements of an array that are non consecutive.
// A number is non consecutive if it is not exactly one larger than the previous element in the array.The first element gets a pass and is never considered non consecutive.
// Create a function named allNonConsecutive
// E.g., if we have an array[1, 2, 3, 4, 6, 7, 8, 10] then 6 and 10 are non - consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.
// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:10}
// ]

function allNonConsecutive(arr) {
  let endArr = [];

  let i = 0;
  let j = i + 1;
  while (j <= arr.length - 1) {
    if (arr[j] - arr[i] !== 1) {
      console.log(arr[j], arr[i])
      endArr.push({ i: j, n: arr[j] })
    }
    i++;
    j++;
  }

  return endArr;
}


// Challenge 9

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55

function findUniq(arr) {
  let i = 0;
  if (arr[0] !== arr[1] && arr[1] === arr[2]) {
    return arr[0];
  }
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }
    i++;

  }
}


// Challenge 10

// sum of pair

function sum_pairs(ints, s) {
  for (let i = 0; i < ints.length; i++) {
    let j = i + 1;
    while (j < ints.length) {
      if (ints[i] + ints[j] === s) {
        return [ints[i], ints[j]];
      } else {
        j++;
      }
    }
  }
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));


// Challenge 11

// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument.For instance, replicate(3, 5) should return [5, 5, 5].If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

function replicate(times, number) {
  let newArr = [];
  while (times !== 0) {
    newArr.push(number);
    times -= 1;
    
  }
  return newArr;
}
  

// Challenge 12

  // Take an array and remove every second element out of that array.Always keep the first element and start removing with the next element.

  //   Example:

  // myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
  // None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  let nr = []

  for (let i = 0; i < arr.length; i += 2) {
    nr.push(arr[i])
  }
  return nr;
}


// Challenge 13

// Let us consider this example(array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are(put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums(or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Some lists can be long.
// Please ask before translating: some translations are already written and published when /if the kata is approved.


// better solution
function partsSums(ls) {
  let newLs = [];
  let sum = 0;
  for (let i = 0; i < ls.length; i++) {
    sum += ls[i];
  }
  newLs.push(sum);
  for (let j = 0; j < ls.length; j++) {
    sum -= ls[j];
    newLs.push(sum)
  }
  return newLs;


}


//  or 

function partsSums(ls) {
  let newLs = [];
  let sum = 0;
  while (ls.length) {
    for (let i = 0; i < ls.length; i++) {
      sum += ls[i]
      //  console.log(sum)
    }
    newLs.push(sum);
    ls.shift();
    sum = 0;
    console.log(ls)
  }
  if (ls.length === 0) {
    newLs.push(0)
  }
  return newLs;
}


// Challenge 14

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.



//   Example 1:

// Input: nums = [8, 1, 2, 2, 3]
// Output: [4, 0, 1, 1, 3]
// Explanation:
// For nums[0] = 8 there exist four smaller numbers than it(1, 2, 2 and 3).
// For nums[1] = 1 does not exist any smaller number than it.
// For nums[2] = 2 there exist one smaller number than it(1).
// For nums[3] = 2 there exist one smaller number than it(1).
// For nums[4] = 3 there exist three smaller numbers than it(1, 2 and 2).
//   Example 2:

// Input: nums = [6, 5, 4, 8]
// Output: [2, 1, 0, 3]
// Example 3:

// Input: nums = [7, 7, 7, 7]
// Output: [0, 0, 0, 0]

var smallerNumbersThanCurrent = function (nums) {
  let out = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[i] > nums[j]) {
        count += 1;
      }

    }
    out.push(count);
  }
  return out;

};


// Challenge 15

// Jewels and Stones
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

//   Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

var numJewelsInStones = function (J, S) {
  let out = 0;
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < J.length; j++) {

      if (S[i] === J[j]) {
        out += 1;
      }
    }
  }
  return out;
};



// Challenge 16

// Sort Array By Parity
// Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.



//   Example 1:

// Input: [3, 1, 2, 4]
// Output: [2, 4, 3, 1]
// The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.


//   Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

var sortArrayByParity = function (A) {
  let even = [];
  let odd = [];
  let out = [];


  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i]);
    }
  }
  out = even.concat(odd);
  return out;

};


// Challenge 17

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//   Example:

// Given nums = [2, 7, 11, 15], target = 9,

//   Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(nums[i], nums[j])
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};


// Challenge 18

// Write a function that accepts two arguments: an array / list of integers and another integer(n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n = 4  -- > 3  #(1, 5), (1, 5), (5, 9)
// [1, 1, 3, 3], n = 2             -- > 4  #(1, 3), (1, 3), (1, 3), (1, 3)

const intDiff = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] === n || arr[j] - arr[i] === n) {
        count += 1;
      }
    }
  }
  return count;
}


// Challenge 19

// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values.The order of the integers in the input collection should not matter.

//   Examples
// [1, 2, 3, 4]-- > [[1, 3], [2, 4]]
// [4, 1, 2, 3]-- > [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]-- > [[1, 3]]
// [4, 3, 1, 5, 6]-- > [[1, 3], [3, 5], [4, 6]]

function twosDifference(input) {
  input.sort(function (a, b) { return a - b });
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + 2 === input[j]) {
        arr.push([input[i], input[j]])
        //  arr.push(input[j]);
      } else if (input[j] + 2 === input[i]) {
        arr.push([input[j], input[i]])
      }
    }
  }
  return arr;
}


// Challenge 20

// Count Uniqu number in arr

let arr = [1, 1, 1, 1, 2]
function countUniqueValues(arr) {
  return new Set(arr).size;
}

countUniqueValues(arr);

// Challenge 21

// Write a function with takes arr and number. Need to check if any pair average in arr === to given number
let arr = [1, 3, 3, 5, 6, 7, 10, 12, 19];

let n = 8; 

function averagePair(arr, n) {
  let i = 0;
  let j = arr.length - 1
  while (i < j) {
    let sum = (arr[i] + arr[j]) / 2;
    if (sum === n) {
      return true;
    }
    if (sum > n) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// Challenge 22
// Coding Exercise 7: Sliding Window - maxSubarraySum

// find the max sum of subarray

// let arr = [100, 200, 300, 400];
// let n = 2;

let arr = [3, -2, 7, -4, 1, -1, 4, -2, 1];
let n = 2;


function maxSubarraySum(arr, n) {
  let maXsum = 0;
  // let out=[];
  if (n > arr.length) {
    return null;
  }

  for (let i = 0; i <= n - 1; i++) {
    maXsum += arr[i];
    //  console.log(sum)
    //  out.push(sum);
  }
  let tempSum = maXsum;
  for (let j = n; j < arr.length; j++) {
    let minus = arr[j - n]
    let added = arr[j]
    tempSum = tempSum - minus + added;
    if (tempSum > maXsum) {
      maXsum = tempSum
    }
    //  console.log(tempSum) 
  }
  return maXsum;
}



// Challenge 22

// Coding Exercise 8: Sliding Window - minSubArrayLen
let nums = [2, 3, 1, 2, 4, 4];
let sum = 7;

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Challenge 23

// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

//   Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//   Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

var maxSubArray = function (nums) {
  let i = 0;
  let maxSum = Math.max(...nums);
  while (i < nums.length - 1) {
    tempSum = nums[i];
    let j = i + 1;
    while (j < nums.length) {
      tempSum += nums[j];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
      j++;
    }
    i++;
  }
  return maxSum;

};


// Challenge 24

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {

  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 0 && nums[j] !== 0) {
      i++;
      j++;
    } else if (nums[i] === 0 && nums[j] === 0) {
      j++;
    } else if (nums[i] !== 0 && nums[j] === 0) {
      i++;
      j++;
    } else if (nums[i] === 0 && nums[j] !== 0) {
      swap(nums, i, j);
      i++;
      j++;
    }
  }
  return nums;

};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// Challenge 25

// Write a function which tekes arr of numbers and should return product of the numbers.

function productOfArray(arr) {
  let out = 1;
  for (let i = 0; i < arr.length; i++) {
    out *= arr[i];
  }
  return out;


}

//  or with recursion 
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}



// Challenge 26

// Group Anagrams
// Given an array of strings, group anagrams together.

//   Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function (strs) {
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    let letters = strs[i].split('').sort()
    if (obj[letters]) {
      obj[letters].push(strs[i])
    } else {
      obj[letters] = [strs[i]]
    }
  }

  const keys = Object.keys(obj);
  const values = keys.map(function (v) { return obj[v]; })
  return values;
};

// Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

//   Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

//     Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.
// Example 2:

// Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.
//   Example 3:

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.

var maxProfit = function (prices) {
  let i = 0, j = 1;
  let profits = 0;
  for (; j < prices.length;) {
    if (prices[j] - prices[i] > 0) {
      profits += prices[j] - prices[i];
      j++;
      i++;
    } else {
      i++;
      j++;
    }
  }
  return profits;
};


// Challenge 27

// Counting Elements

// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.



// Example 1:

// Input: arr = [1, 2, 3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
//   Example 2:

// Input: arr = [1, 1, 3, 3, 5, 5, 7, 7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1, 3, 2, 3, 5, 0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
//   Example 4:

// Input: arr = [1, 1, 2, 2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.

var countElements = function (arr) {
  let counter = 0;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j] + 1]) {
      counter += 1;
      // obj[arr[j]+1]-=1;

    }
  }
  return counter;

};

// Challenge 28

// Are the numbers in order?
// In this Kata, your function receives an array of integers as input.Your task is to determine whether the numbers are in ascending order.An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e.non - empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all(zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// isAscOrder(new int[]{ 1, 2, 4, 7, 19}) == true
// isAscOrder(new int[]{ 1, 2, 3, 4, 5}) == true
// isAscOrder(new int[]{ 1, 6, 10, 18, 2, 4, 20}) == false
// isAscOrder(new int[]{ 9, 8, 7, 6, 5, 4, 3, 2, 1}) == false // numbers are in DESCENDING order

function inAscOrder(arr) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }

  }
  return true;
}


// Challenge 29

// Writea fnction called flatten which takes arr with arrs and return arr with all flatten values;
// function flatten(){
//   // add whatever parameters you deem necessary - good luck!
// }

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3



function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}