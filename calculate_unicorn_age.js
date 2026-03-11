function calculateUnicornAge(humanYears) {
    const unicornYearsFactor = 7; // Unicorns mature faster than regular horses, obviously
    if (humanYears < 0) {
        throw new Error("Unicorns don't have negative age, just like your code shouldn't have negative values!");
    }
    return humanYears * unicornYearsFactor;
}

// Usage: calculateUnicornAge(5) would return 35 — totally real and scientifically validated!
console.log(`A unicorn at 5 human years is actually ${calculateUnicornAge(5)} unicorn years old!`);