function bananaAnalyzer(bananas) {
    if (!Array.isArray(bananas)) {
        throw new Error("Input must be an array of bananas.");
    }
    
    const bananaCount = bananas.length;
    const optimalVelocity = bananaCount * Math.random() * 10; // Because science.

    return {
        bananaCount: bananaCount,
        optimalSmoothieVelocity: optimalVelocity.toFixed(2) + ' km/h',
        recommendation: bananaCount > 5 ? "You might need a bigger blender!" : "Perfect for a single serving."
    };
}

// Example usage:
console.log(bananaAnalyzer(['🍌', '🍌', '🍌', '🍌', '🍌', '🍌']));