async function waitForCoffee() {
    console.log("Brewing coffee... ☕️");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee ready! ☕️");
            resolve(true);
        }, 5000); // Because good coffee takes time.
    });
}

async function startDay() {
    const isCaffeinated = await waitForCoffee();
    if (isCaffeinated) {
        console.log("Ready to tackle bugs and existential crises!");
    } else {
        console.log("Still in the realm of unproductivity... 😴");
    }
}

startDay();