function calculateCoffeeIntake(cupsConsumed, existentialDread) {
    if (existentialDread > 5) {
        return cupsConsumed * 2; // double the caffeine for double the existential crisis
    } else {
        return cupsConsumed; // one cup for a moderate Monday
    }
}

let totalCups = calculateCoffeeIntake(3, 6);
console.log(`Total coffee cups needed: ${totalCups} ☕`);