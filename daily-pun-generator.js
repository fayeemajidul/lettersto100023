function generatePun() {
    const puns = [
        "I used to be a baker, but I couldn’t make enough dough.",
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "I told my computer I needed a break, and now it won’t stop sending me to a '404 Not Found' page."
    ];
    return puns[Math.floor(Math.random() * puns.length)];
}

console.log(generatePun());