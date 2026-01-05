function calculateMoonCatAge(humanYears) {
    if (humanYears < 0) {
        throw new Error("Negative human years? Are we time travelers?");
    }
    const moonYears = humanYears * 12; // 1 human year = 12 moon months
    const catYearsFormulation = (moonYears * 0.5) + 4; // Every moon year is worth 0.5 cat years + 4 for maturity
    return catYearsFormulation;
}

console.log(`A 5 human year old cat is actually ${calculateMoonCatAge(5)} moon cat years old!`);