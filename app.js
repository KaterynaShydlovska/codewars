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



// Challenge -4
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.If you have an empty array, you need to return it.
function sortArray(array) {
  const odds = array
    .filter(x => x % 2)
    .sort((a, b) => a - b);

  return array
    .map(x => x % 2 ? odds.shift() : x);
}


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//   Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;
  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    };
  }
  return sum;
}

//////////////////////////////////////////

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

const getHouses = (arr) => {
  let houses = [];
  // Solution code here...
  return houses;
};

const totalCharacters = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name);
    if (arr[i].children.length) {
      newArr.push(arr[i].children);
    }
    if (arr[i].spouse !== null) {
      newArr.push(arr[i].spouse);
    }
  }
  let stringArray = newArr.toString();
  let oneArray = stringArray.split(',')
  let arrayLength = oneArray.length;
  console.log(arrayLength)
  return arrayLength;
};

totalCharacters(characters);



//////////////////////////////////////////////////////
//sort

function countSort(array) {
  var hash = {}, countArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else if (hash[array[i]] === 3) {
      hash[array[i]] += 0;
    } else {
      hash[array[i]]++;
    }
  }

  for (var key in hash) {
    // for any number of _ element, add it to array
    for (var i = 0; i < hash[key]; i++) {
      countArr.push(parseInt(key));
    }
  }

  return countArr;
}
countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
////////////////////////////////////////

// Given a sorted(in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4


var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

  }
}

search([1, 2, 3, 4, 5, 6, 9], 3);


//with for loop
function search(nums, target) {
  let middle;
  if (nums.length % 2 === 0) {
    middle = nums.length / 2;
  } else {
    middle = (nums.length + 1) / 2;
    console.log('here is', middle);
  }
  if (nums[middle] === target) {
    return middle;
  } else if (nums[middle] > target) {
    for (let i = middle; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      } else {
        for (let j = middle; j > 0; j--) {
          if (nums[j] === target) {
            return j
          }
        }
      }
    }
  }
  return false;
};
search(nums, target);




// buble sort

arr=[1,4,6,8,2,10,3,5];

function swap(arr, index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      // console.log(arr[index1], arr[index2])
      arr[index2] = temp;
  }


function bubleSort(arr){
  for(let i=0; i<arr.length; i++) {
    for(j=0; j<=i;j++){
      if(arr[i]< arr[j]){
        swap(arr,i,j);
      }
    }
  }
  return arr

};
bubleSort(arr);



// selection sort

items = [1, 4, 6, 8, 2, 10, 3, 5, 7, 20, 15];

function swap(items, index1, index2) {
  let temp = items[index1];
  // console.log(temp)
  items[index1] = items[index2];
  // console.log(arr[index1], arr[index2])
  items[index2] = temp;
}

function selectionSort(items) {
  var len = items.length,
    min;

  for (var i = 0; i < len; i++) {
    // set minimum to this position
    min = i;
    //check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    //if the minimum isn't in the position, swap it
    if (i != min) {
      swap(items, i, min);
    }
  }

  return items;
}

selectionSort(items);

