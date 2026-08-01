const quotes = [
    "Keep calm and code on.",
    "There’s no place like 127.0.0.1.",
    "It's not a bug, it's an undocumented feature.",
    "Code never lies, comments sometimes do.",
    "Why do programmers prefer dark mode? Because light attracts bugs!"
];

function inspireCode() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
}

setInterval(inspireCode, 10000); // Inspire your code every 10 seconds!