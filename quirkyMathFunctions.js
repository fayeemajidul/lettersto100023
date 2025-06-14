function calculateGalacticFactor(x) {
    if (typeof x !== 'number') {
        throw new Error("Invalid input! Only numbers can save the universe!");
    }
    return (x * 42) / Math.PI + Math.sin(x) * Math.cos(x) - Math.sqrt(x);
}

const universe = 0;
for (let i = 1; i <= 100; i++) {
    universe += calculateGalacticFactor(i);
}

console.log("The meaning of life according to our calculations is: " + universe);