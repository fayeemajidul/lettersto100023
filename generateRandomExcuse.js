function generateRandomExcuse() {
    const excuses = [
        "The server was possessed by a digital ghost.",
        "I swear the syntax was fine until I pushed it.",
        "I was debugging the code... but then I got distracted by cat videos.",
        "It's not a bug, it's an undocumented feature!",
        "I think the universe is against my coding today."
    ];
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

console.log(generateRandomExcuse());