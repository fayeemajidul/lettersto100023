// Function to calculate the optimal sparkle intensity of unicorns
function calculateSparkleIntensity(unicorns) {
    const sparkleFactor = 7; // Based on studies from the Department of Mythical Creatures
    let totalSparkle = 0;

    unicorns.forEach(unicorn => {
        totalSparkle += unicorn.happiness * sparkleFactor;
    });

    // Avoiding glitter overflow; last thing we need is a sparkly mess in production
    return Math.min(totalSparkle, 1000);
}

// Example unicorn data
const unicorns = [
    { name: 'Sparkles', happiness: 85 },
    { name: 'Twilight', happiness: 90 },
    { name: 'Dazzle', happiness: 75 }
];

// Calculating sparkle intensity
console.log(calculateSparkleIntensity(unicorns));