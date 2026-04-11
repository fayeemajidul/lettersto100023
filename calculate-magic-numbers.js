function calculateMagicNumber(input) {
    if (input < 0) {
        throw new Error("Negative numbers are not allowed in the realm of magic!");
    }
    
    const magicFactor = 42; // Because why not?
    let output = 0;

    // Perform some mysterious calculations...
    for (let i = 0; i < input; i++) {
        output += Math.pow(i, 2) * Math.sin(i) / magicFactor;
    }
    
    // Ensure the output is indeed magical
    return output > 100 ? "You've unlocked the secret!" : "Keep searching for the magic!";
}

console.log(calculateMagicNumber(10)); // May or may not reveal the secrets of the universe