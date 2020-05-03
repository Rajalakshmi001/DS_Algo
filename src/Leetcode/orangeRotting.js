function infect(grid, infected) {
  let counter = 0;
  while (infected.length) {
    for (let row = 0; row < infected.length; row++) {
      let affected = false,
        i = infected[row][0],
        j = infected[row][1];
      if (grid[i - 1] && grid[i - 1][j] && grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        affected = true;
        infected.push([i - 1, j]);
      }
      if (grid[i + 1] && grid[i + 1][j] && grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        affected = true;
        infected.push([i + 1, j]);
      }
      if (grid[i][j - 1] && grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        affected = true;
        infected.push([i, j - 1]);
      }
      if (grid[i][j + 1] && grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        affected = true;
        infected.push([i, j + 1]);
      }
      infected.shift();
      if (affected) counter++;
    }
  }
  return counter;
}

function isFreshOrangeAv(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].indexOf(1) > -1) return -1;
  }
}
var orangesRotting = function(grid) {
  if (isFreshOrangeAv(grid) !== -1) return 0;
  let counter = 0,
    infected = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        console.log(i, j);
        infected.push([i, j]);
        break;
      }
    }
  }
  counter = infect(grid, infected);
  if (isFreshOrangeAv(grid) === -1) return -1;
  return counter;
};

console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
