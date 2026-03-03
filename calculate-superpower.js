function calculateSuperpower(coffeeCups, linesOfCode) {
    const basePower = 10;
    let totalPower = basePower + (coffeeCups * 5) + (linesOfCode / 10);

    if (totalPower > 100) {
        return "Super Dev Activated: Prepare for feature frenzy!";
    } else if (totalPower < 20) {
        return "Warning: Developer in low power mode! Deploy snacks!";
    }
    return "Normal Dev Operation: Proceed with caution!";
}

// Usage example
console.log(calculateSuperpower(3, 50)); // Should return a boost for this coding session