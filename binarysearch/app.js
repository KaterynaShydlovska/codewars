'use strict';

// Challenge 1

// binary search

let arr = [1, 1, 2, 2, 3, 3, 5, 4, 4];
let n = 5;
function binarySearch(arr, n) {
  let lowIndex = 0, highIndex = arr.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (midIndex == n) {
      return midIndex;
    } else if (n > arr[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return false;
}


binarySearch(arr, n);


// Challenge 2

// binary search

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let n= 9;
// // let n= 10;
// // let n = 4;
// let n = 8;

// function binarySearch(arr, n) {
//   let first = 0;
//   let last = arr.length - 1;
//   let mid = Math.floor((first + last) / 2);
//   //  console.log('here is', arr[mid])
//   console.log('arr', mid);
//   if (n === arr[mid]) {
//     console.log('arr', mid);
//     return arr[mid];
//   } else if (n < arr[mid]) {
//     return binarySearch(arr.slice(0, mid), n);
//   } else {
//     return binarySearch(arr.slice(mid + 1, arr.length - 1), n);
//     console.log(arr)
//   }
//   return -1;
// }

// binarySearch(arr, n);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n= 9;
let n = 11;
// let n = 4;
// let n = 8;

function binarySearch(first, last, arr) {
  // let first = 0;
  // let last = arr.length-1;
  let mid = Math.floor((first + last) / 2);
  console.log(mid, first, last);
  if (n === arr[mid]) {
    // console.log('arr', mid);  
    return arr[mid];
  } else if (first > last) {
    return false;
  }

  else if (n < arr[mid]) {
    return binarySearch(0, mid, arr);
  } else {
    return binarySearch(mid + 1, arr.length - 1, arr);
  }
}

binarySearch(0, arr.length - 1, arr);


// Challenge 3

// Given a sorted(in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.If target exists, then return its index, otherwise return -1.
// Example 1:
// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

  }
}

search([1, 2, 3, 4, 5, 6, 9], 3);


//with for loop
function search(nums, target) {
  let middle;
  if (nums.length % 2 === 0) {
    middle = nums.length / 2;
  } else {
    middle = (nums.length + 1) / 2;
    console.log('here is', middle);
  }
  if (nums[middle] === target) {
    return middle;
  } else if (nums[middle] > target) {
    for (let i = middle; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      } else {
        for (let j = middle; j > 0; j--) {
          if (nums[j] === target) {
            return j
          }
        }
      }
    }
  }
  return false;
};
search(nums, target);
