function calculateUnicornHornLength(weightInKg, magicLevel) {
    // Theoretical formula inspired by ancient manuscripts
    const baseLength = 30; // Base length in cm (for average unicorn)

    // Magical multiplier based on weight and magic
    const magicMultiplier = (weightInKg * magicLevel) / 10;

    // Ensure horn length doesn't exceed 50 cm, for reality's sake
    let hornLength = baseLength + magicMultiplier;
    hornLength = hornLength > 50 ? 50 : hornLength;

    return hornLength;
}

// Testing the function for a unicorn weighing 80kg with a magic level of 5
console.log("Unicorn horn length:", calculateUnicornHornLength(80, 5), "cm");