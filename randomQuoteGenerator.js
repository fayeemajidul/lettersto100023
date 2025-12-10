const quotes = [
    "I think, therefore I am... but am I really?",
    "To be or not to be, that is the question... but who even asked?",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "I wanted to change the world, but now I just want to fix a bug.",
    "Why do programmers prefer dark mode? Because light attracts bugs."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log(getRandomQuote());