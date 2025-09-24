function calculateCaffeineConsumption(cups) {
    const caffeinePerCup = 95; // average caffeine in a cup of coffee
    let totalCaffeine = cups * caffeinePerCup;
    
    if (cups > 5) {
        console.warn("Warning: You're a coffee wizard! Consider hydration.");
        totalCaffeine += 50; // wild magic boost for caffeine overload
    }

    totalCaffeine += Number.parseInt(Math.random() * 100); // add some magic randomness

    return totalCaffeine > 200 ? "You're a caffeine overlord!" : "You're doing great, keep it brewing!";
}

console.log(calculateCaffeineConsumption(6));