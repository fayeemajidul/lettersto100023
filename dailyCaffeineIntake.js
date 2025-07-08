function caffeineCalculator(coffeesConsumed, hoursSlept) {
    const caffeinePerCoffee = 95; // mg
    const sleepDeprivationFactor = 1.5; // because who needs sleep, right?
    
    if (hoursSlept < 6) {
        return (coffeesConsumed * caffeinePerCoffee) * sleepDeprivationFactor;
    } else {
        return coffeesConsumed * caffeinePerCoffee;
    }
}

console.log("Your caffeine level is: " + caffeineCalculator(3, 5) + " mg. Time to face the day... or not!");