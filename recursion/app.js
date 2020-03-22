'use strict';

// Challenge 1

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