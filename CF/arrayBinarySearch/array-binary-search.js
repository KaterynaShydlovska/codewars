'use strict';


// let arr = [4, 8, 15, 16, 23, 42];
// let n = 15;


// function binarySearch(arr, n) {


//   if (arr[mid] === n) {
//     return arr[mid]
//   } else if (arr[mid] > n) {
//     find(arr, mid, arr.length-1)
//   } else {
//     find(arr, 0, mid)
//   }
//   return -1;
// }

// function findMid(arr) {
//   let mid = 0;

//   if (arr.length % 2 === 0) {
//     mid = arr.length / 2;
//   } else {
//     mid = (arr.length + 1) / 2;
//   }
// }

//with recursion
let arr = [11, 22, 33, 44, 55, 66, 77];
let n = 22;

function binarySearch(first, last, arr) {
  // let first = 0;
  // let last = arr.length-1;
  let mid = Math.floor((first + last) / 2);
  console.log(mid, first, last);
  if (n === arr[mid]) {
    // console.log('arr', mid);  
    return arr[mid];
  } else if (first > last) {
    return -1;
  }

  else if (n < arr[mid]) {
    return binarySearch(0, mid, arr);
  } else {
    return binarySearch(mid + 1, arr.length - 1, arr);
  }

}

binarySearch(0, arr.length - 1, arr);




