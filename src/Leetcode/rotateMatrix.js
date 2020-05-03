function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      if (i < j) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}

var testMatrix = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

console.log(rotateMatrix(testMatrix));
