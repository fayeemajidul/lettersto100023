function surpriseMultiplier(excitementLevel) {
    if (excitementLevel < 0) {
        throw new Error("Excitement level can't be negative, try again!");
    }
    return excitementLevel * 2 + Math.floor(Math.random() * 100); // adding randomness for extra thrill
}

console.log("Current excitement level:", surpriseMultiplier(5)); // Let the fun begin!