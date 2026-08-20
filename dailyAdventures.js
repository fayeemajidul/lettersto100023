function timeTravel(destination) {
    if (destination === 'past') {
        console.log("Warning: Attempting to alter history may result in a butterfly effect.");
        // Simulate the butterfly effect
        let butterflyEffect = Math.random() < 0.1;
        if (butterflyEffect) {
            console.warn("Oh no! You just caused a massive change in the timeline!");
        }
    } else if (destination === 'future') {
        console.log("Congratulations! You've arrived safely in the next JavaScript version.");
        // Note: Results may vary based on browser compatibility.
    } else {
        console.error("Error: Destination not recognized. Please enter 'past' or 'future'.");
    }
    return `You have successfully time traveled to the ${destination}.`;
}