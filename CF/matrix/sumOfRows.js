// write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values


let matrix = [
  [1, 2, 3],
  [3, 5, 7],
  [1, 7, 10],
  [1, 7, 10, 12, 15]
];


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