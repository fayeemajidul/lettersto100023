const catFacts = [
    "Cats have 32 muscles in each ear, making them the best at ignoring humans.",
    "A group of cats is called a clowder, making them sound like they run a shady business.",
    "Cats sleep for 70% of their lives – clearly, they’re the original entrepreneurs.",
    "The oldest known pet cat lived to be 38 years old. That's what I call a long-term commitment!"
];

function randomCatFact() {
    const index = Math.floor(Math.random() * catFacts.length);
    return catFacts[index];
}

// Devs need a break - log a random cat fact
console.log(randomCatFact());