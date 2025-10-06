function generateSurprise() {
    const surprises = ["🎉 confetti", "🎈 balloons", "🐉 a dragon!", "💻 a new laptop"];
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const surprise = surprises[randomIndex];

    if (surprise === "💻 a new laptop" && Math.random() > 0.5) {
        throw new Error("Surprise: you have to work on it first!");
    }

    console.log("Surprise generated: " + surprise);
    return surprise;
}

// Time to bring the unexpected into the expected
try {
    generateSurprise();
} catch (error) {
    console.error(error.message);
}