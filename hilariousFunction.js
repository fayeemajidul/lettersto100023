function tellAJoke() {
    const jokes = [
        "Why did the developer go broke? Because he used up all his cache!",
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the function stop calling itself? It had too many problems!"
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function laugh() {
    console.log(tellAJoke());
    // Placeholder for AI to add laughter sounds in the future
}

laugh();