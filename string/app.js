'use strict';

// Challenge 1

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

// Challenge 2

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



// Challenge 3

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



// Challenge 4

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


// Challenge 5

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

// or 
function add(a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}


// Challenge 5

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.Taking the first letter of all of the inputs and grouping them next to each other.Do this for every letter, see example below!
// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
  let newStr = '';
  console.log(one, two, three)
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < one.length) {
    newStr += one[i] + two[j] + three[k];
    i++;
    j++;
    k++;
  }
  return newStr;
}


// Challenge 6

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

//   strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  }
  return count;
}
// or
function strCount(str, letter) {
  return str.split(letter).length - 1
}


// Challenge 7

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even - odd disparity

function capitalize(s) {
  let output1 = "";
  let output2 = "";
  let arr = [];
  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      output1 += s[i].toUpperCase();
    }
    else {
      output1 += s[i].toLowerCase();
    }
  }
  arr.push(output1)
  for (var j = 0; j < s.length; j++) {
    if (j % 2 != 0) {
      output2 += s[j].toUpperCase();
    }
    else {
      output2 += s[j].toLowerCase();
    }
  }
  arr.push(output2)
  return arr;
}

// Challenge 8

//  Write a function called isSubsequence whichbtakes in two strings and checks whether the characters in the first strng from a subsequence of the characters in the second string, in other words, the function should check whether the characters in this string apper somewhere in the second string, whithout their order changng.
let str1 = 'abc'
let str2 = 'abracadabra'

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

isSubsequence(str1, str2);

// isSubsequence Solution - Recursive but not O(1) Space

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}


// Challenge 9

// Coding Exercise 9: Sliding Window - findLongestSubstring

let str = '' // 0
let str = 'thisisawsome'; // 6

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}



// Challenge 9

// Backspace String Compare

// Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.

//   Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
//   Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
//   Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
//   Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".


var backspaceCompare = function (S, T) {
  const build = (S) => {
    let st = [];
    for (let i = 0, len = S.length; i < len; ++i) {
      if (S[i] == '#') {
        st.pop();
      } else {
        st.push(S[i]);
      }
    }
    return st.join('');
  }
  return build(S) === build(T);
};


// Challenge 10

// Given aray with strings capitalize the first latter in the each string.

function capitalizeFirst(arr, position = 0) {
  if (position > arr.length - 1) {
    return arr;
  }
  arr[position] = arr[position].replace(arr[position][0], arr[position][0].toUpperCase());
  return capitalizeFirst(arr, position + 1)
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// Challenge 11

// Given aray with strings capitalize all words in the each string.

function capitalizeWords(arr, position = 0) {
  if (position > arr.length - 1) {
    return arr;
  }
  arr[position] = arr[position].replace(arr[position], arr[position].toUpperCase());
  return capitalizeWords(arr, position + 1)
}
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']



// Challenge 12

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1', '2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  return a >= 9007199254740992 - 1 || b >= 9007199254740992 - 1 ? bigInt(a, b) : (a * 1 + b * 1) + '';
}

function bigInt(a, b) {
  var c = '';
  var d = 0;

  var zero = new Array((Math.abs(a.length - b.length)) + 1).join('0')

  a.length >= b.length ? b = zero + b : a = zero + a;

  for (var i = b.length - 1; i >= 0; i--) {
    var sum = (a[i] * 1 + b[i] * 1) + d;
    if (sum >= 10) {
      sum = sum - 10;
      d = 1;
    } else {
      d = 0;
    }
    c = sum + c;
  }

  return d > 0 ? d + c : c;
}


// Challenge 13

// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  name = name.split(' ');
  // console.log(name);
  let str1 = '';
  let str2 = '';
  // for(let i=0; i<name.length; i++){
  str1 += name[0].toUpperCase().slice(0, 1)
  str2 += name[1].toUpperCase().slice(0, 1)
  // }
  return str1 + '.' + str2;
}


// Challenge 14

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

//   Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function (s) {
  let output = [];
  let newS = s.split(' ');

  for (let i = 0; i < newS.length; i++) {
    let splited = newS[i].split('').reverse().join('');
    output.push(splited);

  }
  return output.join(' ')


};

// Challenge 15

// The aim of this kata is to split a given string into different strings of equal size(note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function (s, partLength) {
  var parts = [];
  var array = s.split('');
  while (array.length) {
    parts.push(array.splice(0, partLength).join(''));
  }
  return parts.join(' ');
}


// Challenge 16

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  let newName = name.toLowerCase();
  newName = newName.charAt(0).toUpperCase() + newName.slice(1)
  
  return `Hello ${newName}!`
  
  };


// Challenge 17

//   Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

function greet(name) {
  if(name === "" || name === null){
  return null;
  }else{
  return "hello " + name + "!";
  }
 }

 // Challenge 18
  
//  Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

// "1 skip 2 skip 5 skip 13 skip 34"

// Return the result as a string

// You can presume that n is always a positive integer between (and including) 1 and 64.

function skiponacci(n) {
  console.log(n)
  let arr =[];
  if(n === 1){
    return '1'
  }
  var a = 1, b = 0, temp;

  while (n >= 1){
    temp = a;
    a = a + b;
    b = temp;
    arr.push(b);
    n--;
  }
  for(let i=1; i< arr.length; i+=2){
  arr[i] =' skip '
  }
  return arr.join('').trim()
}




 // Challenge 19

//  Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
 

let paragraph = "a, a, a, a, b,b,b,c, c"
let banned = ["a"];
 
 function words(paragraph, banned) {
  //  let newBan = banned.toString().toLowerCase();
  //  console.log(newBan)
   let obj={};
   let max=0;
   let output = '';
    
    let strArr = paragraph.replace(/[.,?!]/g," ").toLowerCase().split(' ')
    // console.log(strArr)

    for(let i =0; i<strArr.length; i++ ){
      if(!banned.includes(strArr[i]) && strArr[i] !== '' ){
        if(!obj[strArr[i]]){
          obj[strArr[i]] =1;
        }else{
          obj[strArr[i]]+=1;
        }
      }
    }

console.log(obj)
let map = Object.entries(obj);

for(let j =0; j< map.length; j++){
  if(map[j][1] > max){
    max = map[j][1];
    output = map[j][0]
  }
}
console.log(output)
  return output  
}


 console.log(words(paragraph, banned));

 // Challenge 20

//  Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
 var validPalindrome = function(s) {
  let i = 0,
      j = s.length - 1;
  
  let errors = 1;
  
  while(i < j) {
      
      if(s[i] === s[j]) {
          i++;
          j--;
      } else if(s[i+1] === s[j] && s[i+2] === s[j-1] && errors){
          i++
          errors--
     } else if(s[j-1] === s[i] && errors){
         j--
         errors--;
      } else {
          return false
      }
  }
  
  return true;
};


// Challenge 21

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

 
// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'


var balancedStringSplit = function(s) {
  let counter=0;
  let runner=0;
  let i=0;
  let j=1;
  
  while(j< s.length){
      if(s[i] !== s[j] && runner === 0){
         counter++; 
          i=j+1;
          j+=2;
      }else if(s[i] !== s[j] && runner !== 0){
         runner--; 
          j++
      }else{
          runner++
          j++     
      }
  }
  return counter;
  
};