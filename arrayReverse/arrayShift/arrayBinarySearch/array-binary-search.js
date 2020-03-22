'use strict';


let arr = [4, 8, 15, 16, 23, 42];
let n = 15;


function binarySearch(arr, n) {


  if (arr[mid] === n) {
    return arr[mid]
  } else if (arr[mid] > n) {
    find(arr, mid, arr.length-1)
  } else {
    find(arr, 0, mid)
  }
  return -1;
}

function findMid(arr) {
  let mid = 0;

  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
  } else {
    mid = (arr.length + 1) / 2;
  }
}

