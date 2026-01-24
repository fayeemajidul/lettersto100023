function calculateCoffeeIntake(hoursSlept) {
    const baseCups = 2; // Base caffeine requirement
    const slumpMultiplier = hoursSlept < 5 ? 3 : 1; // Increase cups for less than 5 hours
    return baseCups * slumpMultiplier;
}

function startDay() {
    let hoursSlept = prompt("How many hours did you sleep last night?");
    let cupsNeeded = calculateCoffeeIntake(hoursSlept);

    console.log(`You need ${cupsNeeded} cups of coffee to function today! ☕`);
}

startDay();