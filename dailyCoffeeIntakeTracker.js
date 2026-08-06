function trackCoffeeIntake(cups) {
    const caffeinePerCup = 95; // average caffeine per cup in mg
    const maxCaffeine = 400; // daily limit in mg
    let totalCaffeine = cups * caffeinePerCup;

    if (totalCaffeine > maxCaffeine) {
        console.warn("You've exceeded your caffeine limit! Time to switch to decaf!");
        totalCaffeine = maxCaffeine; // Let's cap it for sanity
    }

    return `Total caffeine intake: ${totalCaffeine} mg - Proceed with caution!`;
}

// Example usage: trackCoffeeIntake(5); // Caution: 475 mg caffeine!