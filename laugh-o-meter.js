function laughOometer(jokes) {
    let laughs = 0;
    jokes.forEach(joke => {
        if (joke.includes('unicorn') || joke.length % 2 === 0) {
            laughs++;
            console.log("HaHa! 😂");
        } else {
            console.log("Hmm... 🤔");
        }
    });
    return laughs >= 3 ? "You're definitely a dad now!" : "Keep trying, the dad jokes aren't ready yet...";
}

// Sample jokes to test
const myJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the unicorn cross the road? To eat the rainbow!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space."
];

console.log(laughOometer(myJokes));