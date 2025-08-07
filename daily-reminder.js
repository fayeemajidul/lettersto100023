function generateQuote() {
    const quotes = [
        "Code like nobody's watching, because they probably are!",
        "I don't always test my code, but when I do, I do it in production.",
        "There are 10 types of people in the world: those who understand binary and those who do not.",
        "Debugging: Being the detective in a crime movie where you are also the murderer."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log("Motivational Quote of the Day: " + generateQuote());