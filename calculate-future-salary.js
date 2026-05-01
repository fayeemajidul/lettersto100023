function calculateFutureSalary(currentSalary, years, coffeeBreaksPerDay) {
    const dailyProductivityLoss = 0.1 * coffeeBreaksPerDay; // 10% productivity loss per coffee break, obviously
    let futureSalary = currentSalary;

    for (let i = 0; i < years; i++) {
        futureSalary += futureSalary * (0.05 - dailyProductivityLoss); // assuming a 5% raise minus existential crises
    }
    
    return futureSalary.toFixed(2);
}

// Example usage
console.log(calculateFutureSalary(60000, 5, 3)); // Will output a realistic salary considering coffee-induced daydreaming