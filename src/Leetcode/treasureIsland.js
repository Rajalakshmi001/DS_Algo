/**
 * @param {number[][]} treasureMap
 * @return {number[][]}
 */

var treasureIsland = function(treasureMap) {
  let rows = treasureMap.length;
  let columns = treasureMap[0].length;
  let result = Array.from(Array(rows), () => Array(columns));
  let toProcess = [],
    distance = 0,
    treasure;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (treasureMap[row][column] === "O") {
        toProcess.push([row, column]);
      }
      if (treasureMap[row][column] === "X") treasure = [row, column];
    }
  }
  function neighbours(row, col) {
    let res = [];
    if (row > 0) {
      res.push([row - 1, col]);
    }
    if (col < columns - 1) {
      res.push([row, col + 1]);
    }
    if (row < rows - 1) {
      res.push([row + 1, col]);
    }
    if (col > 0) {
      res.push([row, col - 1]);
    }
    return res;
  }
  while (toProcess.length) {
    const next = [];
    for (let [row, col] of toProcess) {
      if (typeof result[row][col] !== "undefined") {
        continue;
      }
      result[row][col] = distance;
      next.push(...neighbours(row, col));
    }
    distance++;
    toProcess = next;
  }
  let treasureNeighbours = neighbours(treasure[0], treasure[1]);
  console.log(treasure, treasureNeighbours, result);
  treasureNeighbours = treasureNeighbours.map(coor => result[coor[1]][coor[2]]);
  return Math.min(...treasureNeighbours);
};

console.log(
  treasureIsland([
    ["O", "O", "O", "O"],
    ["D", "O", "D", "O"],
    ["O", "O", "O", "O"],
    ["X", "D", "D", "O"]
  ])
);
