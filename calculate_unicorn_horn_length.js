function calculateHornLength(isMagical, rainbowCount) {
    if (isMagical) {
        return Math.ceil(rainbowCount * 2.5 + Math.random() * 10); // Magical scaling
    } else {
        return "Unicorn not found. Please check your enchanted forest."; // Sad unicorn
    }
}

const unicornHorn = calculateHornLength(true, 3);
console.log(`Your unicorn's horn length is: ${unicornHorn} inches of pure magic!`);