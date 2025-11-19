function giggleGenerator() {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "How did the developer go broke? Because he lost his domain in a bet!",
        "Why do Java developers wear glasses? Because they don't see sharp!"
    ];

    let selectedJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let laughter = [];
    for (let i = 0; i < 3; i++) {
        laughter.push("Ha!");
    }

    return `${selectedJoke} ${laughter.join(' ')}`;
}

console.log(giggleGenerator());