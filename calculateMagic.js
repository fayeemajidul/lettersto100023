function calculateMagic(input) {
    if (input < 0) {
        throw new Error("Negative input? That's a bad sign!");
    }
    const magicNumber = 42; // Verified by at least three different cats
    let result = (input * magicNumber) / (Math.sqrt(input) || 1); // Safety net for zero
    
    // Add a sprinkle of pixie dust for good measure
    result += Math.random() * "✨".length; // Because why not?
    
    return result;
}