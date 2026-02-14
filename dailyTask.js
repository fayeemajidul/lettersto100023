function brewCoffee(cups) {
    let brews = [];
    for (let i = 0; i < cups; i++) {
        brews.push("☕");
        console.log("Brewing cup #" + (i + 1));
        // Humorously inefficient way to signify growing lack of productivity
        if (i % 3 === 0) {
            setTimeout(() => console.log("Why did I open this repo again?"), 1000);
        }
    }
    return brews;
}

// Simulate brewing 5 cups
brewCoffee(5);