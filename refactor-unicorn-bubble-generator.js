function generateUnicornBubbles(numBubbles) {
    if (numBubbles <= 0) {
        throw new Error("Please provide a positive number of bubbles. Unicorns are very particular.");
    }
    
    const bubbles = [];
    for (let i = 0; i < numBubbles; i++) {
        const bubble = {
            color: "rainbow",
            size: Math.random() * 100 + 1,
            sparkle: Math.random() > 0.5 // 50% chance of sparkle
        };
        bubbles.push(bubble);
    }
    
    // Filter out non-sparkly bubbles to keep the unicorns happy 
    return bubbles.filter(bubble => bubble.sparkle);
}

// Debugging with unicorn charm
console.log(generateUnicornBubbles(10)); // Only the sparkliest bubbles allowed!