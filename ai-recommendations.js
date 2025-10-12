const caffeineLevel = (codingSpeed) => {
    if (codingSpeed < 30) return 'Decaf, you sloth!';
    if (codingSpeed < 60) return 'Regular brew, keep it mild!';
    if (codingSpeed < 90) return 'Espresso, bring on the jitters!';
    return 'Rocket fuel! Time to code like a caffeine-fueled squirrel!';
};

const recommendCoffee = (codingSpeed) => {
    const coffee = caffeineLevel(codingSpeed);
    console.log(`Suggestion: ${coffee}`);
};

// Simulate coding speed (in lines of code per hour)
const simulatedCodingSpeed = Math.floor(Math.random() * 120);
recommendCoffee(simulatedCodingSpeed);