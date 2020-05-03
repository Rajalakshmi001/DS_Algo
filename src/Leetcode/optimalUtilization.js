function optimalUtilization(a, b, target) {
  a = a.sort((elem1, elem2) => elem1[1] - elem2[1]);
  b = b.sort((elem1, elem2) => elem1[1] - elem2[1]);
  let low = 0;
  let high = b.length - 1,
    diffMap = new Map();
  while (low < a.length || high >= 0) {
    if (a[low][1] + b[high][1] <= target) {
      const diff = target - (a[low][1] + b[high][1]);
      if (!diffMap.has(diff)) diffMap.set(diff, [[a[low][0], b[high][0]]]);
      else {
        let currentValue = diffMap.get(diff);
        currentValue.push([a[low][0], b[high][0]]);
        diffMap.set(diff, currentValue);
      }
      if (diff === 0) {
        high = high === 0 ? 0 : --high;
        low = low === a.length - 1 ? low : ++low;
      } else {
        low = low === a.length - 1 ? low : ++low;
      }
    } else {
      high = high === 0 ? 0 : --high;
    }
    if (low === a.length - 1 && high === 0) {
      if (a[low][1] + b[high][1] <= target) {
        const diff = target - (a[low][1] + b[high][1]);
        if (!diffMap.has(diff)) diffMap.set(diff, [[a[low][0], b[high][0]]]);
        else {
          let currentValue = diffMap.get(diff);
          currentValue.push([a[low][0], b[high][0]]);
          diffMap.set(diff, currentValue);
        }
      }
      break;
    }
  }
  return diffMap.get(Math.min(...diffMap.keys()));
}
let a = [[1, 3], [2, 5], [3, 7], [4, 10]];
let b = [[1, 2], [2, 3], [3, 4], [4, 5]];
let target = 10;
// a = [[1, 8], [2, 7], [3, 14]];
// b = [[1, 5], [2, 10], [3, 14]];
// target = 20;
console.log(optimalUtilization(a, b, target));
