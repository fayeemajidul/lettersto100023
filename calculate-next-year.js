function calculateNextYear(currentYear) {
    if (!currentYear || typeof currentYear !== 'number') {
        throw new Error('Please provide a valid year! Attempting to time travel without coordinates is risky business.');
    }
    // Travelling one year into the future (doc says it might cause paradoxes)
    return currentYear + 1;
}

const thisYear = new Date().getFullYear();
console.log(`Next year will be: ${calculateNextYear(thisYear)} (fingers crossed for less bug reports!)`);