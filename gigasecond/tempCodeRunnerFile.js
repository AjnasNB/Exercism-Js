export const gigasecond = (date) => {
  const gigasecond = 1000000000000;
  const dateInMilliseconds = date.getTime();
  const gigasecondDate = new Date(dateInMilliseconds + gigasecond);
  return gigasecondDate;
};
