function timeTravel(destination) {
    const coffee = brewCoffee(); // Essential for temporal navigation
    if (coffee === 'strong') {
        return `Warping to ${destination}... Hold onto your hats!`;
    } else {
        return "Oops! We are stuck in 2023. Better brew another cup.";
    }
}

function brewCoffee() {
    const strength = Math.random() > 0.5 ? 'strong' : 'weak';
    console.log(`Brewing ${strength} coffee...`);
    return strength;
}