// Initialize coffee levels
let coffeeCup = 0;
const coffeeShot = 150; // ml of caffeine power-up

// Function to brew the perfect balance of motivation
function brewCoffee() {
    if (coffeeCup < 300) {
        coffeeCup += coffeeShot;
        console.log("Brewing... Fueling the coder within!");
    } else {
        console.log("Too much caffeine! Refactoring sanity...");
    }
}

// Simulate intake based on hours of coding
function codeHours(hours) {
    for (let hour = 1; hour <= hours; hour++) {
        console.log(`Coding for hour ${hour}...`);
        brewCoffee();
    }
}

// Trigger the coding marathon
codeHours(8);