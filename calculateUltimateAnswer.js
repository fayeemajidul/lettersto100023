function calculateUltimateAnswer(input) {
    if (input === undefined) {
        console.log("Undefined? More like un-fun! Let's just return 42.");
        return 42;
    }
    
    const isPanGalacticGargleBlaster = (input) => input.includes("Pan Galactic Gargle Blaster");

    if (isPanGalacticGargleBlaster(input)) {
        console.log("You've unlocked the secret! The answer is 42.");
        return 42;
    } else {
        console.log("Keep trying! The answer is still 42.");
        return 42;
    }
}

console.log(calculateUltimateAnswer(undefined)); // Why is it still undefined?