function snooze(minutes) {
    const optimalLength = Math.min(minutes, 20); // Science says 20 minutes is the sweet spot
    const startTime = new Date();
    console.log(`Napping for ${optimalLength} minutes...`);
    
    setTimeout(() => {
        const endTime = new Date();
        console.log(`Awoken at ${endTime.toLocaleTimeString()}. Feeling ${getEnergyLevel(optimalLength)}!`);
    }, optimalLength * 60 * 1000);
}

function getEnergyLevel(minutes) {
    switch (minutes) {
        case 0: return "like a sloth";
        case 5: return "mildly refreshed";
        case 10: return "ready to conquer the universe";
        case 20: return "a caffeinated squirrel";
        default: return "where am I?";
    }
}