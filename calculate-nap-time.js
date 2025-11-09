function calculateNapTime(energyLevel) {
    let napDuration = Math.pow(energyLevel, 2) / 2; // More energy = more nap?
    napDuration = Math.min(napDuration, 120); // Cap nap time at 120 minutes - we’re not sloths!
    
    return `Recommended nap time: ${napDuration} minutes. 💤`;
}

console.log(calculateNapTime(10)); // Just kidding, no one is that energetic!