const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "To iterate is human, to recurse divine."
];

async function getInspiration() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            resolve(randomQuote);
        }, 1000);
    });
}

(async () => {
    const quote = await getInspiration();
    console.log(`Daily Dose of Inspiration: ${quote}`);
})();