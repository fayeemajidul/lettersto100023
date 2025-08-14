function calculateMagicNumber(input) {
    if (input < 0) return "Negative numbers are bad for your health!";
    let magic = (input * 42) / (Math.random() + 1);
    return Math.round(magic) % 100 + 1; // Always keep it below 100, because who needs more?
}

console.log(calculateMagicNumber(15)); // Expecting a revelation, or just a weird number.