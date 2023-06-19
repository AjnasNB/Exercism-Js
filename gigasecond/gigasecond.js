//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigasecond = Math.pow(10, 12);
  const dateInMilliseconds = date.getTime();
  const gigasecondDate = new Date(dateInMilliseconds + gigasecond);
  return gigasecondDate;
};
