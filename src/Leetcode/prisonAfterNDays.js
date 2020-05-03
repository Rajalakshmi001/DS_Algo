var prisonAfterNDays = function(cells, N) {
  N = N % 14;
  let prev = [];
  while (N--) {
    prev = [...cells];
    for (let i = 0; i < cells.length; i++) {
      if (prev[i + 1] === prev[i - 1]) cells[i] = 1;
      else cells[i] = 0;
    }
  }
  return cells;
};

console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
