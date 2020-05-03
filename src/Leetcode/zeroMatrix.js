function zeroMatrix(matrix) {
  let rowIndexes = [],
    columnIndexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowIndexes.indexOf(i) === -1 && columnIndexes.indexOf(j) === -1) {
        if (matrix[i][j] === 0) {
          rowIndexes.push(i);
          columnIndexes.push(j);
          matrix = makeZero(matrix, i, j);
        }
      }
    }
  }
  return matrix;

  function makeZero(matrix, rowIndex, columnIndex) {
    for (let i = 0; i < matrix[rowIndex].length; i++) {
      matrix[rowIndex][i] = 0;
    }
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][columnIndex] = 0;
    }
    return matrix;
  }
}

var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log(zeroMatrix(testMatrix));
