// returns the total amount for different days(d).
function rentalCarCost(days) {
    const DIALY_RENT = 40,
          WEEKLY_DISCOUNT = 50,
          THREE_DAYS_DISCOUNT = 20;
    var totalCost = days * DIALY_RENT;
    
    if (days >= 7) {
      return totalCost - WEEKLY_DISCOUNT;
    } else if (days >= 3) {
      return totalCost - THREE_DAYS_DISCOUNT;
    }
    return totalCost;
}
