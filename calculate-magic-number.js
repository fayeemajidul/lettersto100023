function calculateMagicNumber(input) {
    if (typeof input !== 'number') {
        throw new Error("Input must be a number, not a crystal ball!");
    }
    let magicNumber = (input * 42 - Math.sqrt(input)) / (Math.PI / 2);
    return Math.round(magicNumber);
}

console.log("Your magic number is: ", calculateMagicNumber(7)); // Better than fortune cookies!