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


// // Challenge -5
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
// // Challenge -6

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
// // Challenge -7

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

// // Challenge -8

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
// // Challenge -9
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
// // Challenge -10

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
// // Challenge -11

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

//  Insertion Sort
// // Challenge -12

function insertionSort(items) {
  var len = items.length,
    value,              // the value currently being compared
    i,                  // index into unsorted section
    j;                  // index into sorted section
  for (i = 0; i < len; i++) {
    // store the current value because it may shift later
    value = items[i];

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section
    // over by one. This creates space in which to insert the value.
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}
insertionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]


//////////////////////////
//Merge Sort
// // Challenge -13
function merge(leftA, rightA) {
  var results = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);
  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  var midpoint = Math.floor((array.length) / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
/////////////////////////////////////////////////////////////////
//Quickselect
// // Challenge -14

var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];

function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == (k - 1)) {
    return A[p];
  } else if (p > (k - 1)) {
    return quickSelectInPlace(A, l, p - 1, k);
  } else {
    return quickSelectInPlace(A, p + 1, h, k);
  }
}

function medianQuickselect(array) {
  return quickSelectInPlace(array, 0, array.length - 1, Math.
    floor(array.length / 2));
}

quickSelectInPlace(array, 0, array.length - 1, 5);


/////////////////////////////////////////////////
//  quick Sort
// // Challenge -15

function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {

      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

quickSort([6, 1, 23, 4, 2, 3]);


// // Challenge -16
// FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER
// The simple approach to this problem is to check every other element for each element in the array.
function findTwoSum(array, sum) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = i + 1; j < arrayLength; j++) {
      if (array[j] + array[i] == sum) {
        return true;
      }
    }
  }
  return false;
}


function findSumOfTwo(array, sum) {
  var store = {};

  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    if (store[array[i]]) {
      return true;
    } else {
      store[sum - array[i]] = array[i];
    }
  }
  return false;
}

findSumOfTwo([1, 5, 7, 6, 9], 20);

// binary search
// // Challenge -17
let arr = [1, 1, 2, 2, 3, 3, 5, 4, 4];
let n = 5;
function binarySearch(arr, n) {
  let lowIndex = 0, highIndex = arr.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (midIndex == n) {
      return midIndex;
    } else if (n > arr[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return false;
}


binarySearch(arr, n);




// // Challenge -18
// Your task is to remove all duplicate words from a string, leaving only single(first) words entries.

//   Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let obj = {};
  let newS = s.split(' ');
  newS.forEach((element) => {

    obj[element] = true;
  });
  return Object.keys(obj).join(' ');
}



// binary search
// // Challenge -19

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let n= 9;
// // let n= 10;
// // let n = 4;
// let n = 8;

// function binarySearch(arr, n) {
//   let first = 0;
//   let last = arr.length - 1;
//   let mid = Math.floor((first + last) / 2);
//   //  console.log('here is', arr[mid])
//   console.log('arr', mid);
//   if (n === arr[mid]) {
//     console.log('arr', mid);
//     return arr[mid];
//   } else if (n < arr[mid]) {
//     return binarySearch(arr.slice(0, mid), n);
//   } else {
//     return binarySearch(arr.slice(mid + 1, arr.length - 1), n);
//     console.log(arr)
//   }
//   return -1;
// }

// binarySearch(arr, n);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n= 9;
let n = 11;
// let n = 4;
// let n = 8;

function binarySearch(first, last, arr) {
  // let first = 0;
  // let last = arr.length-1;
  let mid = Math.floor((first + last) / 2);
  console.log(mid, first, last);
  if (n === arr[mid]) {
    // console.log('arr', mid);  
    return arr[mid];
  } else if (first > last) {
    return false;
  }

  else if (n < arr[mid]) {
    return binarySearch(0, mid, arr);
  } else {
    return binarySearch(mid + 1, arr.length - 1, arr);
  }
}

binarySearch(0, arr.length - 1, arr);






// // Challenge -20
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15


  let n = 555;

  function difference(n) {
    let sum = 0;
    let mult = 1;
    let nums = n.toString().split('');
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      sum += parseInt(nums[i]);
      mult *= parseInt(nums[i]);

    }
    // console.log(sum)

    return (mult - sum);
  }

difference(n);
  
function test(str) {
  let add = 0
  let mult = 1
  let numbers = str.split().forEach(el => {
    add += parseInt(el);
    mult = mult * parseInt(el);
  });
  console.log(mult, add)
  return mult - add;
}
test("6655");

  

// // Challenge -21
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.



// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.


function countSteps(num) {
    let steps = 0;
    while (num > 0) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num - 1;
      }
      steps += 1;
    }
    return steps;
}
  

// // Challenge -22
// output '1[.]1[.]1[.]1[1]'

let address = '1.1.1.1';
function ipNum(address) {
  return address.replace(/[._]/g, "[.]");
}
  


// // Challenge -22
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

// Chalenge 23
// Merge sort
let arr = [5, 6, 1, 10, 4, 3, 0, 7, 9];

function merge(arrOne, arrTwo) {
  let arr = new Array(arrOne.length + arrTwo.length);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arrOne.length || j < arrTwo.length) {
    console.log(arrOne, arrTwo)
    if (i < arrOne.length && j < arrTwo.length) {
      console.log('moi her')
      if (arrOne[i] >= arrTwo[j]) {
        arr[k] = arrTwo[j];
        j++;
      } else {
        arr[k] = arrOne[i];
        i++;
      }
    } else if (j >= arrTwo.length) {
      arr[k] = arrOne[i];
      i++;
    } else {
      arr[k] = arrTwo[j];
      j++;
    }
    k++;
  }
  return arr;
}




function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}


console.log('here is return', mergeSort(arr));

// Challenge 24 
// Buble sort

let arr = [5, 8, 1, 3, 6];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubleSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);

      }
      j++;
    }
    i++;
  }
  return arr;
}


bubleSort(arr);


// hashTable
// Chalenge 24

class Hashtable {
  constructor(numOfboxes) {
    this.size = numOfboxes;
    this.element = new Array(this.size);
  }

  hash(key) {
    return key.length % this.size;
  }

  put(key, value) {
    let boxNum = this.hash(key);
    if (this.element[boxNum]) {
      obj = this.element[boxNum];
      if (obj[key]) {
        obj[key] = value;
      } else {
        obj[key] = value;
      }
    } else {
      let newObj = {};
      newObj[key] = value;
      this.element[boxNum] = newObj;
    }
  }

  get(key) {
    const h = this.hash(key);
    if (this.element[h]) {
      if (this.element[h][key]) {
        return this.element[h][key];
      }
    }
    return null;
  }

  contains(key) {
    let possibleKey = this.get(key);
    if (possibleKey) {
      // console.log('here is contans', possibleKey)
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    // console.log('here is remove', key)
    let foundEl = this.hash(key);
    if (this.element[foundEl]) {
      delete (this.element[foundEl][key]);
    }
    return 'deleted';
  }
}


let mh = new Hashtable(15);

mh.put("andrii", 45);
mh.put("kate", 25);
// mh.put("hulk", 5);
console.log(mh.get("andrii"));
console.log(mh.remove("kate", 25));
console.log(mh.get('kate'));
console.log(mh.contains("hulk"));


// Challenge 25
let s = "bitcoin take over the world maybe who knows perhaps";

function findShort(s) {
  let newStr = s.split(' ');
  // console.log(newStr);

  newStr.sort((a, b) => {
    return a.length - b.length;
  });
  // console.log(newStr);

  return newStr[0].length;

}

findShort(s);

// function findNewSort(s) {
//   let newStr = s.split(' ');
//   let minl = newStr[0].length
//   let minWord = 0
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i].length < minl) {
//       minl = newStr[i].length;
//       minWord = newStr[i].length
//     }
//   }
//   return minWord
// }

// findNewSort(s)

 // Challenge 26

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.




var isSquare = function (n) {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// Examples
isSquare(-1) //returns //false
isSquare(0) //returns   //true
isSquare(3) //returns   //false
isSquare(4) //returns   //true
isSquare(25) //returns  //true  
isSquare(26) //returns  //false


// fibonacci
// Challeng - 27

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

// hash
// Challeng - 28

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

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key) {
    if (typeof (key) === 'string') {
      return key.length % this.size;
    } else {
      return key % this.size;
    }
  }

  put(key, value) {
    let bucketNum = this.hash(key);
    let obj = this.buckets[bucketNum];
    if (obj) {
      obj[key] = value;
    } else {
      let newObj = {};
      newObj[key] = value;
      this.buckets[bucketNum] = newObj;
    }
  }

  get(key) {
    let num = this.hash(key);
    if (this.buckets[num]) {
      if (this.buckets[num][key]) {
        return this.buckets[num][key];
      }
    }
    return "not found"
  }

  delete(key) {
    let num = this.hash(key);
    if (this.buckets[num]) {
      if (this.buckets[num][key]) {
        delete this.buckets[num][key];
      }
    }
  }

}

let table = new HashTable(15);

table.put(25, 'kate');
table.put(29, 'andrii')
table.put(5, 'hulk')

console.log(table.get(25));
console.log(table.get('kjhj'));


// LinkedList

class Node {
  constructor(potato) {
    this.potato = potato;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    this.size++;
    return value;
  }
  remove(value) {
    let currentHead = this.head;
    if (currentHead.potato === value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;
      while (currentHead.next) {
        if (currentHead.potato === value) {
          prev.next = currentHead.next;
          prev = currentHead;
          currentHead = currentHead.next;
          break; // break out of the loop
        }
        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead.potato == value) {
        prev.next = null;
      }
      this.size--;
      return value;
    }
  }
}


let newList = new LinkedList();

console.log(newList.insert(5));
console.log(newList.insert(2));
console.log(newList.insert(3));
console.log(newList.insert("katya"));
// console.log(newList)
console.log('remove', newList.remove(5));
console.log(newList)


// Challenge 30
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number


function persistence(num) {
  function multiply(n) {
    return n.reduce(function (a, b) { return a * b; });
  }
  let count = 0;

  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count++;
  }
  return count;
}

// function persistence(num) {
//   let times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }

//   return times;
// }


 // Challenge 31
// remove  dublicates from the linked list

function remove(value, node){
  let first = null;
  let second = node;
  while (second !== null) {
    if (second.value === value) {
      first.next = second.next;
      second = second.next;
    } else {
      first =second;
      second = second.next;
    }
  }
  return;
}



// Challenge 32
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55

function findUniq(arr) {
  let i = 0;
  if (arr[0] !== arr[1] && arr[1] === arr[2]) {
    return arr[0];
  }
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }
    i++;

  }
}




// Challenge 33
// Double linkedList


class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleList {
  constructor(value) {
    this.head = null;
    ths.tail = null;
    this.size = 0;
  }
}

addHead(value){
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    let temp = new Node(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
}


addTail(value){
  if (this.tail === null) {
    this.tail = new Node(value);
    this.head = this.tail;
  } else {
    let temp = new Node(value);
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
  }
  this.size++;
}




// Challenge 34
// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }
  // helper function to find rigth place to append
  searchTree(node, value) {
    if (node.value > value) {
      // levo
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.searchTree(node.left, value);
      }
    } else {
      // idi vpravo
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.searchTree(node.right, value);
      }
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.searchTree(this.root, value);
    }
    this.count++;
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;

  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;

  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // depth first search - branch by branch

  // in - order
  // left, root, right
  // 2,3,12,15,28,36,39
  dfsInOrder() {
    let result = [];

    const treverse = node => {
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // capture root node value
      result.push(node.value)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
    }
    treverse(this.root);
    return result;

  }

  // pre - order
  // root,left, right
  // 15, 3,2,12,36,28,39
  dfsPreOrder() {
    let result = [];

    const treverse = node => {
      // capture root node value
      result.push(node.value)
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
    }
    treverse(this.root);
    return result;

  }

  // post-order
  // left, right, root
  // 2,12,3,28,39,36,15
  dfsPostOrder() {
    let result = [];

    const treverse = node => {
      // if left node exists, go left again
      if (node.left) treverse(node.left)
      // if right node exists, go right again
      if (node.right) treverse(node.right)
      // capture root node value
      result.push(node.value)
    }
    treverse(this.root);
    return result;

  }

  // breadth first search - level by level
  // use queue
  // 15,3,36,2,12,28,39
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root)

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result;

  }

}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);

bst.size();
console.log(bst.min());
console.log(bst.max());

bst.contains(2)
bst.contains(9)


// DFS!!!
// bst.dfsInOrder();

// bst.dfsPreOrder();

// bst.dfsPostOrder();





// Challenge 35
//  BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.size = 0;
    this.root = null;
    this.max = null;
    this.min = null;
  }


  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.searchAnInsert(this.root, value);

      if (value > this.max) {
        this.max = value;
      } else if (this.min === null || value < this.min) {
        this.min = value;
      }
    }
    this.size++;
  }

  searchAnInsert(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.searchAnInsert(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.searchAnInsert(node.right, value);
      }
    }
  }

  min() {
    console.log('here is', this.min)
    return this.min;
  }


  max() {
    return this.max;
  }
}


let bst = new BST();

bst.insert(5);
bst.insert(6);
bst.insert(10);
bst.insert(8);
bst.insert(1);
bst.insert(34);
bst.insert(0);
bst.insert(-1);

console.log(bst)



// Challenge 36
// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//   Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


function solution(str) {
  let newStr = [];
  if (str.length % 2 === 1) {
    str = str + "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    newStr.push(str.substring(i, i + 2));
  }
  return newStr;
}



// Challenge 37
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order.The array will always include at least 2 items.

// For example:

// twoOldestAges([1, 2, 10, 8]) // should return [8, 10]

function twoOldestAges(ages) {
  let sortedAge = ages.sort((a, b) => a - b);
  console.log(sortedAge)
  return sortedAge.slice(-2);
}

twoOldestAges(ages);




// Challenge 38
// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


const findOdd = (el) => el.reduce((a, b) => a ^ b);



// Challenge 39
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.If you have an empty array, you need to return it.

//   Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function sortArray(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++)
      if (array[i] % 2 !== 0 && array[j] % 2 !== 0) {
        if (array[i] > array[j])
          //  console.log(array[i], array[i+1])
          swap(array, i, j);
      }
  }
  return array;
}

sortArray(array);





// Challenge 40
// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }


function count(string) {
  let obj = {};
  let empty = {};
  for (let i = 0; i < string.length; i++) {

    if (string === '') {
      return empty;
    }
    if (obj[string[i]]) {
      obj[string[i]] += 1;
    } else {
      obj[string[i]] = 1;
    }
  }

  return obj;
}



// Challenge 41
// Count the number of Duplicates
// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.

//   Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text) {
  let count = {};
  for (let i = 0; i < text.length; i++) {
    // console.log(text[i])
    let letter = text[i].toLowerCase();
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
    }
  }
  console.log('here is ', count)
  let repeats = 0;
  let fewTimes = Object.keys(count)
  for (let j = 0; j < fewTimes.length; j++) {
    // console.log(count[fewTimes[j]])
    if (count[fewTimes[j]] > 1) {

      repeats += 1
    }
  }
  return repeats;
}

//  or secont solution

// let text = "indivIsibility"

// function duplicateCount(text) {
//   let count = {};
//   for (let i = 0; i < text.length; i++) {
//     // console.log(text[i])
//     let letter = text[i].toLowerCase();
//     if (!count[letter]) {
//       count[letter] = 1;
//     } else {
//       count[letter] += 1;
//     }
//   }
//   console.log('here is ', count)
//   let repeats = 0;
//   for (let key in count) {
//     if (count[key] > 1) {
//       repeats += 1;
//     }
//   }
//   return repeats;
// }


// duplicateCount(text);




//  ? = if, correct : wrong
let a = 7 > 3 ? true : false
console.log(a)




// Challenge 42
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.Each integer represents a customer, and its value is the amount of time they require to check out.
//   n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.

//   Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly:)

// Examples
// queueTime([5, 3, 4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10, 2, 3, 3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2, 3, 10], 2)
// should return 12

function queueTime(customers, registers) {
  let arr = [];

  for (let i = 0; i < registers; i++)
    arr[i] = 0;

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}

///////////////////////////////

let arr = [];

const shortestQueueIndex = () => arr.indexOf(Math.min(...arr));

const addCustomer = (customer) => {
  arr[shortestQueueIndex()] += customer;
};

function queueTime(customers, n) {
  arr = new Array(n);
  arr.fill(0);
  customers.forEach(addCustomer);
  return Math.max(...arr);
}



// Challenge 42
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

var moveZeros = function (arr) {
  let i = 0;
  let j = i + 1;
  while (j <= arr.length - 1) {
    if (arr[i] !== 0 && arr[j] !== 0) {
      i++;
      j++;
    } else if (arr[i] !== 0 && arr[j] === 0) {
      i++;
      j++;
    } else if (arr[i] === 0 && arr[j] !== 0) {
      swap(arr, i, j)
      i++;
      j++;
    } else if (arr[i] === 0 && arr[j] === 0) {
      j++;
    }
  }
  return arr;
}



// Challenge 43
// sum of pair


function sum_pairs(ints, s) {
  for (let i = 0; i < ints.length; i++) {
    let j = i + 1;
    while (j < ints.length) {
      if (ints[i] + ints[j] === s) {
        return [ints[i], ints[j]];
      } else {
        j++;
      }
    }
  }
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));


// Challenge 44
// Scenario
// Now that the competition gets tough it will Sort out the men from the boys.

// Men are the Even numbers and Boys are the odd!alt!alt

// Task
// Given an array / list[] of n integers, Separate The even numbers from the odds, or Separate the men from the boys!alt!alt

// Notes
// Return an array / list where Even numbers come first then odds

// Since, Men are stronger than Boys, Then Even numbers in ascending order While odds in descending.

//   Array / list size is at least * 4 *** .

//     Array / list numbers could be a mixture of positives, negatives.

// Have no fear, It is guaranteed that no Zeroes will exists. !alt

// Repetition of numbers in the array / list could occur, So(duplications are not included when separating).

//   Input >> Output Examples:
// menFromBoys({ 7, 3 , 14 , 17}) ==> return ({ 14, 17, 7, 3}) 

function menFromBoys(arr) {
  let men = [];
  let boys = [];
  let mySet = new Set(arr);
  let myArr = Array.from(mySet);
  console.log(myArr)
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0) {
      men.push(myArr[i])
    } else {
      boys.push(myArr[i])
    }
  }
  men.sort(function (a, b) { return a - b });
  boys.sort(function (a, b) { return b - a });
  let newArr = men.concat(boys);
  return newArr;
}




// Challenge 45
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1', '2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// Test Passed: Value == '579'
// Test Passed: Value == '8842'
// Test Passed: Value == '10367'
// Test Passed: Value == '100'
// Test Passed: Value == '8670'
// Test Passed: Value == '5'
// sumStrings('712569312664357328695151392', '8100824045303269669937') - Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'
// sumStrings('50095301248058391139327916261', '81055900096023504197206408605') - Expected: '131151201344081895336534324866', instead got: '1.3115120134408189e+29'

function sumStrings(a, b) {
  if (a === '') {
    return b
  } else if (b === '') {
    return a
  } else {
    let sum = parseFloat(a) + parseFloat(b);
    return sum.toString();
  }
}
// didn't resolve.....;




// Challenge 46
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index. Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers( with 0 - based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8, 0, 2, 5]
// output: 2 # since array[2] == 2

// input: [-1, 0, 3, 6]
// output: -1 # since no index in array satisfies array[index] == index


function indexEqualsValue(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === i) {
      return i
    }
  }
  return -1;
}

// up to 150ms



// Challenge 47

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
  let reg = /^([a-zA-Z0-9]+)$/
  if (string.match(reg)) {
    return true;
  }
  return false;
}



// Challenge 48
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.


// var maxSequence = function (arr) {
//   var curr_max = 0, max_so_far = 0;

//   for (var i = 0; i < arr.length; i++) {
//     curr_max = Math.max(0, curr_max + arr[i]);
//     max_so_far = Math.max(curr_max, max_so_far);
//   }
//   return max_so_far;
// }


function maxSequence(arr) {
  let max = 0;
  if (arr === []) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {

      sum += arr[j]
      if (sum > max) {
        max = sum
      }
    }
  }

  return max
}



// Challenge 49
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].


function differenceInAges(ages) {
  let arr = [];
  let min = Math.min.apply(null, ages);
  let max = Math.max.apply(null, ages);
  let dif = max - min;
  arr.push(min, max, dif)
  return arr;

}

differenceInAges([82, 15, 6, 38, 35]);


// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

//   Subsequence
// A subsequence is different from a substring.The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS("abcdef", "abc") => returns "abc"
// LCS("abcdef", "acf") => returns "acf"
// LCS("132535365", "123456789") => returns "12356"
// Notes
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters(in JavaScript)
// All tests will only have a single longest common subsequence.Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

// Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests(any longest common subsequence will be valid)



function LCS(x, y) {
  //TODO 
  return y.split("").map(function (item) {
    if (x.indexOf(item) != -1) {
      x = x.substring(x.indexOf(item) + 1);
      return item;
    }
  }).join("");
}


// Challenge 50

// Given an array(a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array[].

// Assume that n and all values in the given array will always be integers.

//   Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
  let pos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      pos.push(i)
    }
  }
  return pos;
}

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true

function validParentheses(parens) {
  let left = '(';
  let right = ')';
  let stack = [];
  console.log(parens)
  if (parens === '' || parens[0] === right || parens.length % 2 === 1) {
    return false
  }
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === left) {
      stack.push(parens[i])
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}




// Challenge 51
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers.The input numbers are strings and the function must return a string.

//   Example
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  if (a.length > b.length) {
    return help(b, a)
  } else {
    return help(a, b)
  }
}

function help(min, max, rem = 0) {
  let end = '';
  let i = min.length - 1;
  let j = max.length - 1;
  while (i >= 0) {
    let a = parseInt(min[i])
    let b = parseInt(max[j])
    if (a + b + rem >= 10) {
      let c = ((a + b + rem) - 10)
      if (rem === 0) {
        rem = 1;
      }
      end = c + end;
    } else {
      end = (a + b + rem) + end;
      rem = 0;
    }
    i--;
    j--;
  }
  if (rem !== 0) {
    if (i === j) {
      return 1 + end;
    }
    let temp = help("0", max.substring(0, j + 1), 1);
    return temp + end;
  }
  if (j < 0) {
    return end;
  }
  return max.substring(0, j + 1) + end;
}