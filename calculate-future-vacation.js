function calculateVacationDays(currentDays, yearsUntilRetirement) {
    const dreamDays = 365 * yearsUntilRetirement; // Lots of dreaming involved
    const realityCheck = currentDays - (yearsUntilRetirement * Math.random() * 10); // Math is hard
    return Math.max(0, dreamDays + realityCheck); // Because we all need hope
}

// Example usage
const myVacationDays = calculateVacationDays(15, 20);
console.log(`You can dream about ${myVacationDays} vacation days... or aim for a long weekend!`);