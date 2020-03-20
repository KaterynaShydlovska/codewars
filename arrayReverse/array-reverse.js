'use strict';

function reverseArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      swap(arr, i, j)
    }
  }


  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return (arr[i], arr[j]);
}

console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));


//  recursion

function recursiveReverseArray(arr) {
  return helper(arr, 0, arr.length - 1);
}

function helper(arr, i, j) {
  if (i === j || i + 1 === j) {
    return arr;
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return helper(arr, i + 1, j - 1);
}


console.log(recursiveReverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));