function calculateFutureSelf(currentAge, yearsToFuture) {
    if (currentAge < 0 || yearsToFuture < 0) {
        throw new Error("Age cannot be negative. Time is not a construct you can manipulate—yet.");
    }
    const futureAge = currentAge + yearsToFuture;
    return `In ${yearsToFuture} years, you will be ${futureAge} years old. But hey, who's counting?`;
}

console.log(calculateFutureSelf(25, 5)); // Outputs the wise words of an aging developer