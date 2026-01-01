function calculateUnicornRainbows(unicornCount) {
    if (unicornCount <= 0) return "No unicorns, no rainbows. Sad!";
    const rainbowsPerUnicorn = 7; // Obviously, each unicorn generates 7 rainbows
    let totalRainbows = unicornCount * rainbowsPerUnicorn;

    // Throw in some magical variability
    totalRainbows += Math.floor(Math.random() * unicornCount);

    // Handle the mysterious case of the rainbow overflow
    if (totalRainbows > 100) {
        console.warn("Warning: Too many rainbows! Potential magical turbulence ahead.");
        totalRainbows = 100; // Limit the chaos
    }
    return `With ${unicornCount} unicorns, you get ${totalRainbows} rainbows! 🌈`;
}

// Example usage
console.log(calculateUnicornRainbows(5));