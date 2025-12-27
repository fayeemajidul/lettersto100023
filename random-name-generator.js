function generateRandomName() {
    const prefixes = ["Amazing", "Incredible", "Sneaky", "Quirky"];
    const nouns = ["Llama", "Ninja", "Biscuit", "QuantumComputer"];
    
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${randomPrefix} ${randomNoun}`;
}

console.log(generateRandomName()); // Might output: "Quirky Ninja"