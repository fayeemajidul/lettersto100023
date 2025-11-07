function coffeeToCodeRatio(cupsOfCoffee, linesOfCode) {
    if (cupsOfCoffee === 0) {
        return "No coffee, no code - let the bugs compile!";
    }
    
    let ratio = linesOfCode / cupsOfCoffee;
    
    if (ratio > 100) {
        return "Productivity level: Overachiever! ☕️🚀";
    } else if (ratio > 50) {
        return "Balanced caffeine consumption - keep it flowing!";
    } else {
        return "Warning: May need more coffee to achieve peak performance!";
    }
}

console.log(coffeeToCodeRatio(3, 250)); // Example usage