function detectCaffeineLevel(cups) {
    const productivityMultiplier = 1.5; 
    if (cups > 5) {
        console.log("Warning: Too much caffeine! Productivity may exceed server limits!");
        return cups * productivityMultiplier * 0.5; // Too much coffee causes a crash
    } else if (cups < 1) {
        console.log("Caffeine level low: Transitioning to sloth mode...");
        return cups * productivityMultiplier * 0.1; // Minimal productivity
    } else {
        console.log("Optimal caffeine level detected. Proceed with coding!");
        return cups * productivityMultiplier; // Standard output
    }
}

detectCaffeineLevel(3);