var minPathSum = function(matrix) {
  let rows = matrix.length - 1,
    columns = matrix[0].length - 1,
    sum = 0;
  let i = 0,
    j = 0;
  while (i <= rows && j <= columns) {
    sum += matrix[i][j];
    let right, down;
    if (j < columns) right = matrix[i][j + 1];
    if (i < rows) down = matrix[i + 1][j];
    if (typeof right === "undefined") {
      i++;
    } else if (typeof down === "undefined") {
      j++;
    } else {
      if (right >= down) {
        i++;
      } else {
        j++;
      }
    }
  }
  return sum;
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
