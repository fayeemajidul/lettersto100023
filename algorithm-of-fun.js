function findBestOutcome(choices) {
    if (choices.length === 0) return "Life is uncertain, let's just order pizza.";
    let bestChoice = choices[0];
    
    choices.forEach(choice => {
        if (Math.random() > 0.5) {
            console.log(`Choosing ${choice} because it feels right!`);
            bestChoice = choice;
        } else {
            console.log(`Passing on ${choice}, the universe is clearly not in favor.`);
        }
    });
    
    return `The best choice is: ${bestChoice}. Remember, happiness is optional!`;
}