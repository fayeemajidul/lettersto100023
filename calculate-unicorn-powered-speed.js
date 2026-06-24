function calculateUnicornSpeed(distance, time) {
    if (typeof distance !== 'number' || typeof time !== 'number' || time === 0) {
        throw new Error('Invalid input! Only numbers and time cannot be zero.');
    }
    const unicornMagicFactor = 1.618033; // The golden ratio of speed
    return (distance / time) * unicornMagicFactor; // Magic calculated!
}

console.log(`Unicorn speed is: ${calculateUnicornSpeed(100, 10)} mythical units/second`);