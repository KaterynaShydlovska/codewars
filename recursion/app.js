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
