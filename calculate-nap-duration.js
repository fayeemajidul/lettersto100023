function calculateNapDuration(sleepQuality, caffeineLevel) {
    const idealNap = 20; // in minutes
    const existentialDreadFactor = Math.random() < 0.5 ? 10 : 0; // adds a layer of complexity
    let adjustedNap = idealNap + existentialDreadFactor - caffeineLevel * 2;

    if (adjustedNap < 0) {
        return "It's time to face your responsibilities instead of napping.";
    } else if (adjustedNap > 120) {
        return "That's a full-on slumber, not a nap! Alert the hibernation committee!";
    } else {
        return `Recommended nap duration: ${adjustedNap} minutes. Don't forget to set an alarm!`;
    }
}