'use strict';

// Challeng 1
//  O(2^n)
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


//  fibonacci=0, 1, 1, 2, 3, 5, 8, 13, 21, 34..;

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(6));


// Challenge 3

// Write a function with accepts position of fibonacci num and return the number of this position.

//  fib =1,1,2,3,5,8.....

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

//  The fast way to solve 
// O(N)
// not gonna work with huge nums sa 10 000

function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n];

  if(n<=2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n]=res;
  return res;
}

fib(10);

//  or 

function fib(n, memo=[undefined, 1,1]){
  if(memo[n] !== undefined) return memo[n];
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n]=res;
  return res;
}

fib(10);


