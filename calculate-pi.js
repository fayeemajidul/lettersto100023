function calculatePi(iterations) {
    let pi = 0;
    for (let i = 0; i < iterations; i++) {
        const sign = i % 2 === 0 ? 1 : -1;
        pi += sign / (2 * i + 1);
    }
    return pi * 4;
}

const piApproximation = calculatePi(100000);
console.log(`Calculated Pi: ${piApproximation}`);
console.log("If only I could calculate how many times I've overwritten this file... 🥴");