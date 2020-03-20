'use strict';

// [2,4,6,8], 5
// [4,8,15,23,42], 16

// with splice
function arrayShift(arr, n) {
  let mid = 0;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
  } else {
    mid = (arr.length + 1) / 2;
  }
  arr.splice(mid, 0, n);
  return arr;
}

arrayShift([2, 4, 6, 8], 5);

// no methods
function arrayShift(arr, n) {
  let newArr = [];
  let mid = 0;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
  } else {
    mid = (arr.length + 1) / 2;
  }
  for (let i = 0; i < mid; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(n);
  for (let j = mid; j < arr.length; j++) {
    newArr.push(arr[j])
  }

  return newArr;
}

arrayShift([4, 8, 15, 23, 42], 16);

// strach goal
function arrayDeleteEl(arr, n) {
  let newArr = [];
  let mid = 0;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
  } else {
    mid = (arr.length + 1) / 2;
  }
  for (let i = 0; i < mid; i++) {
    newArr.push(arr[i]);
  }
  for (let j = mid + 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  return newArr;
}

arrayDeleteEl([4, 8, 15, 16, 23, 42], 16);