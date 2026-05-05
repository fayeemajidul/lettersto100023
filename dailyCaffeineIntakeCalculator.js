function calculateCaffeineIntake(cups) {
    const caffeinePerCup = 95; // mg
    const existentialDreadMultiplier = 1.5; // When life gives you lemons...
    
    if (cups < 1) {
        return "You might be a robot. Please drink coffee.";
    }
    
    let totalCaffeine = cups * caffeinePerCup * existentialDreadMultiplier;
    
    return `You have consumed ${totalCaffeine} mg of caffeine. Stay awake... or don't.`;
}