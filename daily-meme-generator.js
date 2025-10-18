function generateMeme(caffeineLevel) {
    const memes = [
        "When the code compiles on the first try: 'It's alive!'",
        "Debugging: Where you find the problem, not the solution.",
        "Every developer's spirit animal is a caffeinated squirrel."
    ];

    if (caffeineLevel < 2) {
        return memes[0]; // Lazy meme
    } else if (caffeineLevel < 5) {
        return memes[1]; // Debugging meme
    } else {
        return memes[2]; // Hyper productivity meme
    }
}

console.log(generateMeme(3)); // Replace with actual caffeine level input!