// write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values


let matrix = [[1, 2, 3],
[3, 5, 7],
[1, 7, 10],
[1, 7, 10, 12, 15]];


function sumOfRows(matrix) {
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
      console.log(sum)
    }
    output.push(sum);
  }
  return output;
}

console.log(sumOfRows(matrix));



// Leetcode 
// Count Negative Numbers in a Sorted Matrix.

// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.

// Return the number of negative numbers in grid.



//   Example 1:

// Input: grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
//   Example 2:

// Input: grid = [[3, 2], [1, 0]]
// Output: 0
// Example 3:

// Input: grid = [[1, -1], [-1, -1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1

var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count += 1
      }
    }
  }
  return count;

};