function calculateCaffeine(sleepHours) {
    const baseCaffeine = 200; // assuming we start with a basic coffee need
    let caffeineMultiplier = 1;

    if (sleepHours < 5) {
        caffeineMultiplier = 3; // triple the caffeine for minimal sleep
    } else if (sleepHours < 7) {
        caffeineMultiplier = 2; // double it for moderate sleep
    }

    return baseCaffeine * caffeineMultiplier;
}

console.log("Daily caffeine requirement: " + calculateCaffeine(4) + "mg (love you, JavaScript!)");