function fuelDeveloper(coffeeCups) {
    const productivityMultiplier = 0.37;
    let codingSessions = 0;

    for (let i = 0; i < coffeeCups; i++) {
        codingSessions += Math.ceil(Math.random() * 5 * productivityMultiplier);
        console.log(`Fueled by cup #${i + 1}, coding sessions increased to ${codingSessions}`);
    }

    return `Total coding sessions after ${coffeeCups} cups: ${codingSessions}`;
}

// Note: Actual results may vary; results not guaranteed without donuts.