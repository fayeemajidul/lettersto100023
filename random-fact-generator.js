function getRandomFact() {
    const facts = [
        "Did you know? The first computer was invented in the 1940s! Or was it the 1490s? Ah, history...",
        "A group of flamingos is called a 'flamboyance'. Just like my code on a Friday night!",
        "JavaScript was created in just 10 days. I guess genius does exist in a hurry!",
        "Google it! Isn't that the answer to everything?",
        "There's a city in Norway called 'Å'—which sounds like my code when it runs without errors."
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}

console.log(getRandomFact());