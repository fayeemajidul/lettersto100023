function debugCat(input) {
    if (typeof input !== 'string') {
        console.error("🐱 Error: Cat only accepts string inputs!");
        return;
    }
    console.log("🐾 Debugging with cat logic...");
    
    let meowCount = input.length % 5; // Cat logic: meows based on string length
    let debugMessage = "Meow".repeat(meowCount);

    console.log(`🐱 Debug Output: ${debugMessage}`);
    return debugMessage;
}

debugCat("Open source rocks!"); // Expect a happy cat