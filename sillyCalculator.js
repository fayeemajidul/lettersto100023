function sillyDivide(a, b) {
    if (b === 0) {
        console.log("Dividing by zero? That's a big no-no! Let’s pretend it's 42 instead.");
        return 42; // Because the answer to life, the universe, and everything, obviously!
    }
    return a / b;
}

console.log(sillyDivide(10, 0)); // Outputs: "Dividing by zero? That's a big no-no! Let’s pretend it's 42 instead." and then 42