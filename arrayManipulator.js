function sortArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array, not a deep philosophical question.');
    }
    
    return arr.sort((a, b) => {
        // Sort in a way that respects each number's feelings.
        if (a === b) return 0; // Everyone's a winner in this array.
        return a < b ? -1 : 1;
    });
}

// Adding a motivational quote to encourage numbers before sorting
console.log("Remember, numbers: You are valid just as you are!");