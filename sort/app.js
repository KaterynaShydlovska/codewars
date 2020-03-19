'use strict';

//Challenge 1

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


//Challenge 2

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


//Challenge -3

// buble sort

arr = [1, 4, 6, 8, 2, 10, 3, 5];

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  // console.log(arr[index1], arr[index2])
  arr[index2] = temp;
}


function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr

};
bubleSort(arr);


//Challenge 4

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


//Challenge 5

//  Insertion Sort

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


//Challenge 6

//Merge Sort

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


//Challenge 7

//Quickselect

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


//Challenge -8

//  quick Sort


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

//Chalenge 9

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



//Challenge 10

//Buble sort

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

//Challenge 11

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



// Challenge 11

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



// Challenge 12

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