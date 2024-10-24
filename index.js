/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3 * 12960; // converted acceleration (m/s^2) to (km/h^2)
const time = 1; // converted time from seconds to hours
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5 * 3600; // fuel burn rate (kg/s)


const newDistance = distance + (velocity*time) //calcultes new distance
const remainingFuel = fbr*time //calculates remaining fuel
const newVelocity = calcNewVel(acceleration, velocity, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel (velocity, acceleration, time) { 
  return velocity + (acceleration*time)
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






