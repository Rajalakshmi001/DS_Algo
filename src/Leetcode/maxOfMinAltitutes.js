function maxOfMinAltitutes(matrix) {
  let rows = matrix.length - 1,
    columns = matrix[0].length - 1,
    minReturnValue = Number.MAX_SAFE_INTEGER;
  let i = 0,
    j = 0;
  while (
    !((i + 1 === rows && j === columns) || (i === rows && j + 1 === columns))
  ) {
    let right, down;
    if (j < columns) right = matrix[i][j + 1];
    if (i < rows) down = matrix[i + 1][j];
    if (typeof right === "undefined") {
      i++;
      if (down < minReturnValue) minReturnValue = down;
    } else if (typeof down === "undefined") {
      j++;
      if (right < minReturnValue) minReturnValue = right;
    } else {
      if (right >= down) {
        j++;
        if (right < minReturnValue) minReturnValue = right;
      } else {
        i++;
        if (down < minReturnValue) minReturnValue = down;
      }
    }
  }
  return minReturnValue;
}

console.log(maxOfMinAltitutes([[5, 1], [4, 5]]));
