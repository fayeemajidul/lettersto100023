function complexAddition(a, b) {
    // Adding two numbers, because that's what we do
    return a + b;
}

function complexSubtraction(a, b) {
    // Subtracting two numbers (probably from my sanity)
    return a - b;
}

function handleMathErrors(value) {
    if (typeof value !== 'number') {
        throw new Error("Math only works with numbers, not with your feelings!");
    }
}

function calculate() {
    const num1 = 42;
    const num2 = 'not a number'; // Oh no, someone is trying to break my math!
    
    try {
        handleMathErrors(num2);
        const sum = complexAddition(num1, num2);
        console.log("The sum is: " + sum);
    } catch (error) {
        console.error("Caught an error: " + error.message);
    }
}

calculate();