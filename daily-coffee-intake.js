const coffeeIntake = () => {
    const cups = Math.floor(Math.random() * 8);
    console.log(`Cups of coffee consumed today: ${cups}`);
    if (cups > 4) {
        console.warn("Warning: Over-caffeination may lead to unexpected code behaviors!");
    } else {
        console.log("Caffeine level: Just enough to solve a few bugs!");
    }
    return cups;
};

coffeeIntake();