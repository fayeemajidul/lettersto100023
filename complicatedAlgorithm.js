function mysteriousFunction(input) {
    if (typeof input !== 'number') {
        throw new Error("What were you thinking? This function only works for numbers.");
    }
    let output = 0;
    for (let i = 0; i < 100; i++) {
        output += Math.random() * (input + i); // This makes total sense, right?
    }
    return output / 100; // Because averaging is what we do when we mess around with randoms.
}

const magicNumber = mysteriousFunction(42); // Definitely not the answer to life, the universe, and everything...
console.log(`The magic number is: ${magicNumber}`);