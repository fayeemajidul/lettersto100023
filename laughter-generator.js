function generateDadJoke() {
    const jokes = [
        "I would tell a JavaScript joke, but you might not get it.",
        "Why did the programmer quit his job? Because he didn't get arrays.",
        "How do you comfort a JavaScript bug? You console it!",
        "Why did the developer go broke? Because he used up all his cache!",
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

console.log(generateDadJoke());