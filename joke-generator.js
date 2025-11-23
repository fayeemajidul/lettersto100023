function tellJoke() {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the programmer quit his job? Because he didn't get arrays!",
        "How many programmers does it take to change a light bulb? None. It's a hardware problem."
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Just in case someone needs more clarity on humor
console.log("Here's a joke for you: " + tellJoke());