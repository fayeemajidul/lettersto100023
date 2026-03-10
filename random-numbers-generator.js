function generateQuantumRandom() {
    // Super sophisticated quantum algorithm to produce randomness... or not
    const outcomes = [0, 1];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    return outcomes[randomIndex];
}

// Just for fun: let's generate a random number 10 times and log it
for (let i = 0; i < 10; i++) {
    console.log(generateQuantumRandom());
}