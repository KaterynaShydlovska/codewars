// Challenge -1
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  let regex = /^\d{4}$|^\d{6}$/;
  if (pin.match(regex) && (pin.length == 4 || pin.length == 6)) {
    return true;
  } else {
    return false;
  }
}

// shortcut solution
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// errow function
// const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);


// Challenge -2
// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  let num = {};
  for (let i = 0; i < A.length; i++) {
    if (num[A[i]]) {
      num[A[i]] += 1
      //  console.log('+1', num);
    } else {
      num[A[i]] = 1
      // console.log('=1', num);
    }
  }
  let oddTimes = Object.keys(num);
  //  console.log(Object.keys(num))
  for (j = 0; j < oddTimes.length; j++) {
    if (num[oddTimes[j]] % 2 !== 0) {
      return parseInt(oddTimes[j])
    }
  }
}

// function findOdd(A) {
   // return A.reduce(function (c, v) { return c ^ v; }, 0);
// }




// Challenge -3
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  let count = 0;
  if (a === b) {
    return a;
  }
  else if (a < b) {
    for (a; a <= b; a++) {
      count += a;
    }
  }
  else if (b < a) {
    for (b; b <= a; b++) {
      count += b;
    }
  }

  return count;
}