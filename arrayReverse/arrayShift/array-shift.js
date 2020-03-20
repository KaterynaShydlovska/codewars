'use strict';

// [2,4,6,8], 5
// [4,8,15,23,42], 16


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