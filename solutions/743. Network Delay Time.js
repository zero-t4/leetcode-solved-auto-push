/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {
  const timeToEachNode = Array.from({ length: n + 1 }, (_, i) => i === k ? 0 : Infinity);
​
  let timeTravelToEachNodeChanged = true;
  for (let i = 1; i < n; i++) {
    if (!timeTravelToEachNodeChanged) {
      break;
    }
​
    timeTravelToEachNodeChanged = false
​
    for (const [sourceNode, targetNode, signalTimeToTravel] of times) {
      if (timeToEachNode[sourceNode] === Infinity) {
        continue;
      }
​
      if (timeToEachNode[targetNode] > timeToEachNode[sourceNode] + signalTimeToTravel) {
        timeTravelToEachNodeChanged = true;
​
        timeToEachNode[targetNode] = timeToEachNode[sourceNode] + signalTimeToTravel;
      }
    }
  }
​
  let maxTimeToTravel = 0;
  for (let i = 1; i <= n; i++) {
    maxTimeToTravel = Math.max(maxTimeToTravel, timeToEachNode[i]);
  }
​
  return maxTimeToTravel !== Infinity
    ? maxTimeToTravel
    : -1;
};
​
