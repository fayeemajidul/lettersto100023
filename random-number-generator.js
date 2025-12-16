function generateRandomNumber(min, max) {
    // Ensuring the range is valid
    if (min >= max) {
        throw new Error("Min must be less than Max. Just like my hopes and dreams.");
    }
    // Generate a random number and make it feel special
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random number generated: ${randomNumber} (totally not rigged)`);
    return randomNumber;
}