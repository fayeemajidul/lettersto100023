function predictFuture(userInput) {
    const fortunes = [
        "You will encounter a bug that only appears when the moon is full.",
        "Your code will work perfectly... until you hit 'deploy'.",
        "You will discover a new JavaScript feature that no one asked for.",
        "A mysterious library will make an appearance in your project's dependencies."
    ];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return `🔮 ${fortunes[randomIndex]} (Input: ${userInput})`;
}
console.log(predictFuture("Will my code compile?"));