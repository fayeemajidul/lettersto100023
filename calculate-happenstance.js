function calculateHappenstance(input) {
    if (input < 0) {
        console.log("Error: Negative infinities cannot be calculated!");
        return null;
    }
    
    let result = 0;
    for (let i = 0; i < input; i++) {
        result += Math.random() * (i % 42); // Adds a touch of the universe's absurdity
        if (result > 9000) {
            console.warn("Over 9000! Please recalibrate your expectations.");
            break;
        }
    }
    
    return result ? `The happenstance is: ${result}` : "Nothing happened... again.";
}