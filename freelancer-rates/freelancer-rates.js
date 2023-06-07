const hourPerDay = 8;
export function dayRate(workingDays) {
    return workingDays * hourPerDay;
}

export function daysInBudget(budget, rate) {
    return Math.floor(budget / dayRate(rate));
}

export function priceWithMonthlyDiscount(ratePerHour, noOfDays, discountAsNumber) {

  const noOfMonths= Math.floor(noOfDays / 22);
  const noOfDaysLeft = noOfDays % 22;
    const priceForAMonth = dayRate(ratePerHour)* 22;
    const discountedAmount = priceForAMonth * (1-discountAsNumber) * noOfMonths;
    const remainingPrice= dayRate(ratePerHour) * noOfDaysLeft;
    return Math.ceil(discountedAmount + remainingPrice);

}