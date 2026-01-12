// Time travel algorithm: safely returns you to the past without the awkward conversations
function timeMachine(destination) {
    if (destination < 0) {
        return "Error: Cannot travel to the negative timeline, it’s too dark.";
    }
    const paradoxChecker = (date) => {
        return date === '2016' ? "Proceed with caution: Avoid meeting your past self!" : "Time travel approved!";
    };

    let result = `Traveling to the year ${destination}`;
    return `${result}. ${paradoxChecker(destination)}`;
}

// Use with caution
console.log(timeMachine(2023)); // Safe to land!
console.log(timeMachine(2016)); // Danger! Avoid yourself!