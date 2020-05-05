'use strict';

// Challenge 1

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


// // Challenge 2

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


// Challenge 3

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


// Challenge 4

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

let text = "indivIsibility"

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
  for (let key in count) {
    if (count[key] > 1) {
      repeats += 1;
    }
  }
  return repeats;
}


duplicateCount(text);



// Challenge 5

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


// Challenge 6

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



// Challenge 7

// Query string is a way to serialize object, which is used in HTTP requests.You may see it in URL:

// codewars.com / kata / search /? q = querystring
// The part q = querystring represents that parameter q has value querystring.Also sometimes querystring used in HTTP POST body:

// POST / api / users
// Content - Type: application / x - www - form - urlencoded

// username = warrior & kyu=1 & age=28
// The string username = warrior & kyu=1 & age=28 represents an entity(user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

// {
//   "username": "warrior",
//     "kyu": 1,
//       "age": 28
// }
// Sometimes there are more than one value for property:

//   {
//     "name": "shirt",
//       "colors": ["white", "black"]
//   }
// Then it represents as repeated param:

// name = shirt & colors=white & colors=black
// So, your task is to write a function that convert an object to query string:

// to_query_string({ "bar": [2, 3], "foo": 1 }) # => "bar=2&bar=3&foo=1"


function toQueryString(obj) {
  var r = ""
  for (var k in obj) {
    var a = [].concat(obj[k])
    for (var v of a) r += k + "=" + v + "&"
  }
  return r.slice(0, -1)
}

// Challenge 8
// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//   Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

//   Example 1:

// Input: [2, 2, 1]
// Output: 1
// Example 2:

// Input: [4, 1, 2, 1, 2]
// Output: 4

var singleNumber = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1
      //  console.log('+1', obj);
    } else {
      obj[nums[i]] = 1
      // console.log('=1', obj);
    }
  }
  console.log(obj);
  let output = Object.keys(obj);
  for (let j = 0; j < output.length; j++) {
    if (obj[output[j]] === 1) {
      // console.log('i',obj[output[j]])
      return output[j]

    }
  }
};

// Challenge 9

// Given 2 str, write a function to determine if the second str is an anagram of the first. Such as cinema -> iceman;

let str1 = 'abcm';
let str2 = 'bcan';

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};


  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (obj2[str2[j]]) {
      obj2[str2[j]] += 1;
    } else {
      obj2[str2[j]] = 1;

    }
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  console.log(obj1, obj2)
  return true;
}

console.log(validAnagram(str1, str2));

// Challenge 10

//  Given to positive integers, find  out if the two numbers have the same friquency of diggits.
//  solution MUST have time complexities O(N)

function sameFrequency(n, m) {
  let obj1 = {};
  let obj2 = {};
  let newN = n.toString().split('');
  let newM = m.toString().split('');
  if (newN.length !== newM.length) {
    return false;
  }

  for (let i = 0; i < newN.length; i++) {
    if (obj1[newN[i]]) {
      obj1[newN[i]] += 1;
    } else {
      obj1[newN[i]] = 1;
    }
  }

  for (let j = 0; j < newM.length; j++) {
    if (obj2[newM[j]]) {
      obj2[newM[j]] += 1;
    } else {
      obj2[newM[j]] = 1;
    }
  }

  for (let key in obj1) {
    if (!(key in obj1)) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(n, m);

// Challenge 11

//  Find if there are any duplicates

// areThereDuplicates Solution(Frequency Counter)

function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}


// Challenge 12

// A zero - indexed array arr consisting of n integers is given.The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3, 4, 3, 2, 3, 1, 3, 3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero - indexed array arr consisting of n integers, returns the dominator of arr.The function should return −1 if array does not have a dominator.All values in arr will be >= 0.

function dominator(arr) {
  for (let i = 0, obj = {}; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1
    if (obj[arr[i]] > arr.length / 2) return arr[i]
  } return -1
}

// function dominator(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//     if (obj[arr[i]] > arr.length / 2) return arr[i]
//   } return -1
// }


// Challenge 11

// Wrie a function called nestedEvenSum. Return the sum of numbers in all even numers in object which may contains nested object.

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10


// Challenge 12

// Your task
// You are given a dictionary / hash / object containing some languages and your test results in the given languages.Return the list of languages where your test score is at least 60, in descending order of the results.

//   Note: the scores will always be unique(so no duplicate values)

// Examples
// { "Java": 10, "Ruby": 80, "Python": 65 } --> ["Ruby", "Python"]
// { "Hindi": 60, "Dutch" : 93, "Greek": 71 } --> ["Dutch", "Greek", "Hindi"]
// { "C++": 50, "ASM": 10, "Haskell": 20 } --> []
// My other katas
// If you enjoyed this kata then please try my other katas! : -)

function myLanguages(results) {
  let arr = [];
  for (let key in results) {
    if (results[key] >= 60) {
      arr.push([key, results[key]])
    }
  }
  let endArr = []
  arr = arr.sort((a, b) => b[1] - a[1]);
  for (j in arr) {
    endArr.push(arr[j][0])
  }
  return endArr;
}

// Challenge 13

// You are given an object, in which every property is an array of strings.E.g.

// {
//   "1": ["A", "B", "C"],
//     "2": ["A", "B", "D", "A"],
// }
// Create a function that returns an object with the same keys, but each string can only appear once.E.g.

// {
//   "1": ["C"],
//     "2": ["A", "B", "D"],
// }
// Rules
// Keys should be compared as numbers: whenever two keys share the same string, the keys are compared numerically and the numerically largest key will keep the string.That's why, in the example above, key "2" contains "A" and "B", as 2 > 1.

// If duplicate strings are found in the same array, the first occurance is kept.

// Order matters.The order of keys in the returned object should be from smallest to largest.And the order of strings in each array should be kept the same, with the exception of any removed strings.

//   Example 1
// Input:

// {
//   "1": ["C", "F", "G"],
//     "2": ["A", "B", "C"],
//       "3": ["A", "B", "D"],
// }
// Output:

// {
//   "1": ["F", "G"],
//     "2": ["C"],
//       "3": ["A", "B", "D"],
// }
// Example 2
// Input:

// {
//   "1": ["A"],
//     "2": ["A"],
//       "3": ["A"],
// }
// Output:

// {
//   "1": [],
//     "2": [],
//       "3": ["A"],
// }
// Example 3
// Input:

// {
//   "432": ["A", "A", "B", "D"],
//     "53": ["L", "G", "B", "C"],
//       "236": ["L", "A", "X", "G", "H", "X"],
//         "11": ["P", "R", "S", "D"],
// }
// Output:

// {
//   "11": ["P", "R", "S"],
//     "53": ["C"],
//       "236": ["L", "X", "G", "H"],
//         "432": ["A", "B", "D"],
// }

const removeDuplicateIds = (obj) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  const usedStrings = new Set();
  const result = {};
  for (const key of sortedKeys) {
    const array = obj[key];
    const uniqueArray = new Set(array);
    uniqueArray.forEach(char => {
      if (usedStrings.has(char)) {
        uniqueArray.delete(char);
      } else {
        usedStrings.add(char);
      }
    });
    result[key] = Array.from(uniqueArray);
  }
  return result;
};


// Challenge 14

// The function is not returning the correct values. Can you figure out why?

// getPlanetName(3); // should return 'Earth'


function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
       break;
    case 2:
      name = 'Venus'
       break;
    case 3:
      name = 'Earth'
       break;
    case 4:
      name = 'Mars'
       break;
    case 5:
      name = 'Jupiter'
       break;
    case 6:
      name = 'Saturn'
       break;
    case 7:
      name = 'Uranus'
       break;
    case 8:
      name = 'Neptune'
       break;
  }
  
  return name;
}

console.log(getPlanetName(5));

// Challenge 15
