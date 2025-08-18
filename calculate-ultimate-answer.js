function calculateUltimateAnswer() {
    const smallNumber = 42;  // Small but mighty
    let universeFactor = Math.random() * 1e11;  // A sprinkle of chaos
    let finalAnswer = (smallNumber * universeFactor) / (universeFactor + 1);

    // Adding some recursion for good measure, because why not?
    if (finalAnswer > 50) {
        return calculateUltimateAnswer();
    }
    
    return finalAnswer;  // Maybe the answer isn't that important after all
}

console.log(calculateUltimateAnswer());