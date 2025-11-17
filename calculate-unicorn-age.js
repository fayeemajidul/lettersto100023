function calculateUnicornAge(humanYears) {
    // Unicorns age 3 times faster than humans, but only on Wednesdays
    if (new Date().getDay() === 3) {
        return humanYears * 3;
    } else {
        return humanYears * 2; // On other days, they prefer napping
    }
}

console.log(`A unicorn that’s 5 human years old is actually ${calculateUnicornAge(5)} unicorn years old.`);