'use strict';

// Challeng 1

// fibonacci
n = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

function nthFibo(n) {
  if (n < 0) {
    return false;
  } else if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  }
  return nthFibo(n - 1) + nthFibo(n - 2)
}
console.log(nthFibo(3));



