function calculateInfinity(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= Math.random() > 0.5 ? 1 : -1; // Infinite randomness, what could go wrong?
    }
    return result === 0 ? 'Nowhere to go but up!' : result; // Because who doesn't love a silver lining?
}

console.log(calculateInfinity(100)); // Spoiler alert: It’s still a mess.