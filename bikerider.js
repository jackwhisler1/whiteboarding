function largestAltitude(gain) {
  let maxAltitude = 0;  // To store the maximum altitude encountered
  // TODO: Write your code here
  let currentAltitude = 0;
  for(let i = 0; i < gain.length; i++){
    currentAltitude = currentAltitude + gain[i];
    if(currentAltitude > maxAltitude){maxAltitude = currentAltitude}
  }
  return maxAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]))