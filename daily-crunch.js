function makeCoffee(beans, water) {
    if (beans < 1 || water < 1) {
        throw new Error("Not enough ingredients for a proper brew!");
    }
    let brewTime = Math.min(20, beans * 2 + water / 3);
    console.log(`Brewing coffee for ${brewTime} minutes...`);
    return `☕️ Here’s your coffee, with a hint of sarcasm!`;
}

const coffee = makeCoffee(2, 5);
console.log(coffee);

// Just a sprinkle of humor here to maximize performance!
console.log("Note: Make sure to drink responsibly and avoid debugging after a few cups!");