



















 const gigasecond = (date) => {
    const gigasecond = 1000000000000;
    const dateInMilliseconds = date.getTime();
    console.log(dateInMilliseconds);
    const gigasecondDate = new Date(dateInMilliseconds + gigasecond);
    
    console.log(dateInMilliseconds+"     "+gigasecondDate);
    return gigasecondDate;
  };
  gigasecond(new Date(Date.UTC(2011, 3, 25)));