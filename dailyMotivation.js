const motivationalQuotes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Remember: there are only 10 types of people in the world—those who understand binary and those who don’t."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
}

console.log("Today's Motivation: " + getRandomQuote());