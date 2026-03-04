function brewCoffee(beans, water) {
    if (beans < 10 || water < 200) {
        throw new Error("Insufficient ingredients, please add more!");
    }

    const brewTime = Math.min(5 + Math.random() * 5, 10); // 5-10 minutes
    console.log(`Brewing coffee... please wait ${brewTime.toFixed(2)} minutes!`);

    setTimeout(() => {
        console.log("Coffee is ready! Enjoy your caffeinated productivity boost.");
    }, brewTime * 1000);
}

brewCoffee(12, 250);