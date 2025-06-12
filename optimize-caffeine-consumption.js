// optimize-caffeine-consumption.js

const MAX_COFFEE_CUPS = 5; // Maximum number of coffee cups per day
let coffeeConsumed = 0;

/**
 * Function to consume a cup of coffee while keeping track.
 * Throws a warning if you exceed the daily maximum.
 */
function drinkCoffee() {
    if (coffeeConsumed < MAX_COFFEE_CUPS) {
        coffeeConsumed++;
        console.log(`☕️ Enjoying cup number ${coffeeConsumed}!`);
    } else {
        console.warn("🚨 Caffeine overload! Time to switch to decaf!");
    }
}

// Enhancing the experience
console.log("New and improved! Get your code caffeinated!");
drinkCoffee();