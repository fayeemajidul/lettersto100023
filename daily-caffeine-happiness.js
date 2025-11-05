function brewCoffee(cups) {
    const happinessPerCup = 10;
    let happiness = 0;

    for (let i = 0; i < cups; i++) {
        happiness += happinessPerCup;
        console.log(`Brewing cup ${i + 1}...`);
        if (i === cups - 1) {
            console.log("Almost there! Prepare for productivity!");
        }
    }

    console.log(`Total happiness generated: ${happiness}`);
    return happiness;
}

brewCoffee(3);