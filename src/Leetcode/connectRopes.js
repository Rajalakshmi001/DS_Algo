function connectRopes(ropes) {
  ropes = ropes.sort((a, b) => a - b);
  let cost = 0;
  for (let i = 1; i < ropes.length; i++) {
    cost += ropes[i] + ropes[i - 1];
    ropes.splice(i - 1, 2, ropes[i] + ropes[i - 1]);
    ropes = ropes.sort((a, b) => a - b);
    i--;
  }
  return cost;
}

console.log(connectRopes([2, 2, 3, 3]));
