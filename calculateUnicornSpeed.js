function calculateUnicornSpeed(distance, time) {
    if (distance < 0 || time <= 0) {
        throw new Error("Distance must be positive and time must be greater than zero, even for unicorns.");
    }
    
    const magicBoost = 1.5; // Factor in their magical nature
    const speed = (distance / time) * magicBoost;

    return `A unicorn can gallop at ${speed.toFixed(2)} mythical units per second! 🦄✨`;
}

// Example usage
console.log(calculateUnicornSpeed(100, 1)); // Output: A unicorn can gallop at 150.00 mythical units per second! 🦄✨