function brewCoffee(cups) {
    if (cups <= 0) {
        console.log("Please set a positive number of cups. Coffee won't brew itself!");
        return;
    }
    let water = cups * 250; // ml
    let coffeeGrounds = cups * 15; // grams 
    console.log(`Brewing ${cups} cups of coffee...`);
    console.log(`Water: ${water}ml, Coffee Grounds: ${coffeeGrounds}g`);
    
    try {
        let result = "☕️".repeat(cups);
        console.log(`Enjoy your coffee: ${result}`);
    } catch (error) {
        console.error("Failed to brew coffee, possibly due to a coffee shortage!");
    }
}

// A new feature to add 'optimistic brewing' error handling
function optimisticBrew(cups) {
    console.log("Starting optimistic brewing...because who needs to sleep?");
    brewCoffee(cups);
}

optimisticBrew(3);