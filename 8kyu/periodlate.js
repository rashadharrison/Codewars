/*Function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.*/

const isPeriodLate = (last, today, cycleLength) => {
  const daysPassed = Math.abs(today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24);
  return daysPassed > cycleLength;
}