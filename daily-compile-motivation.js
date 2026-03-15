const quotes = [
    "Believe in yourself, even when your code doesn’t.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Error 404: Inspiration not found. Check your logic!",
];

// Function to randomly select a quote
function getMotivationalQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Simulating compile process and logging a motivational quote
function compileCode() {
    console.log("Compiling...");
    // By the time this finishes, you'll need a quote to lift your spirits
    console.log(getMotivationalQuote());
}

compileCode();