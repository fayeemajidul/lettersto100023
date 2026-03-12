function calculateUnicornAge(humanYears) {
    // Unicorns age at a rate of 1 unicorn year = 7 magical years
    const UNICORN_AGE_FACTOR = 7;  
    if (humanYears < 0) {
        throw new Error("Unicorns do not exist in negative timelines!");
    }
    return humanYears * UNICORN_AGE_FACTOR;  
}

// Example usage
const myUnicornAge = calculateUnicornAge(5);
console.log(`Your unicorn is ${myUnicornAge} years old in unicorn years!`);