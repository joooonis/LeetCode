const minimumTime = (time, totalTrips) => {
  let minTime = 1;
  let maxTime = Math.max(...time) * totalTrips;
  let midTime = Math.floor((minTime + maxTime) / 2);
  let trips = 0;
  while (minTime < maxTime) {
    trips = 0;
    for (let i = 0; i < time.length; i++) {
      trips += Math.floor(midTime / time[i]);
    }
    if (trips < totalTrips) {
      minTime = midTime + 1;
    } else {
      maxTime = midTime;
    }
    midTime = Math.floor((minTime + maxTime) / 2);
  }

  return minTime;
};
