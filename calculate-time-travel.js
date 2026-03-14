function calculateTimeTravel(distance, speed) {
    // Constants for flux capacitor engagement
    const FLUX_CAPACITOR_GAIN = 1.21; // gigajoules needed
    const TIME_TRAVEL_FACTOR = 88; // miles per hour
    
    if (speed < TIME_TRAVEL_FACTOR) {
        return "Need to hit 88 mph to time travel!";
    }

    let requiredEnergy = (distance / speed) * FLUX_CAPACITOR_GAIN;
    return `You need ${requiredEnergy.toFixed(2)} gigajoules to get to the past!`
}

// Note: Do not attempt this at home without a DeLorean.