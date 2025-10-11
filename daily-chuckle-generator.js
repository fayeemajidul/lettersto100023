function getDadJoke() {
    const jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "I would tell you a joke about an elevator, but it's an uplifting experience.",
        "What's orange and sounds like a parrot? A carrot!"
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

console.log(getDadJoke()); // Prints a random dad joke to lighten the mood during coding sessions