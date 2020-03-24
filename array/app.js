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