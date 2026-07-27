function generateCompliment() {
    const compliments = [
        "Your code is like a fine wine, best when aged just a little bit.",
        "If coding was a sport, you'd definitely be the MVP.",
        "You're the reason we have semicolons in JavaScript.",
        "Not even an infinite loop can make you as repetitive as my compliments.",
        "Your debugging skills are so good; I suspect you have a secret pact with the universe."
    ];
    return compliments[Math.floor(Math.random() * compliments.length)];
}

console.log(generateCompliment());