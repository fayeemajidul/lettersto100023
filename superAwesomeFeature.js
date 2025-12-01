function brewCoffee(order) {
    if (!order.includes('frontend')) {
        throw new Error("Sorry, only frontend developers get coffee!");
    }
    const coffeeTypes = ['Espresso', 'Cappuccino', 'JavaScript Brew'];
    const selectedCoffee = coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];
    console.log(`Brewing a cup of ${selectedCoffee} for our elite frontend team!`);
}

try {
    brewCoffee("frontend latte");
} catch (error) {
    console.error(error.message);
}