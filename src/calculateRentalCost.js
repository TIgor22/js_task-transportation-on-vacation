/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;
const discont3More = 20;
const discont5More = 50;

function calculateRentalCost(days) {
  if (days >= 7) {
    return days * dailyRate - discont5More;
  }

  if (days >= 3) {
    return days * dailyRate - discont3More;
  }

  return days * dailyRate;
}

module.exports = calculateRentalCost;
