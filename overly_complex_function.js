function overlyComplexFunction(input) {
    const result = input.split('').map(char => {
        return char.charCodeAt(0) * Math.sqrt(Math.random() * 100) / Math.PI;
    }).reduce((acc, curr) => {
        return acc + (curr % 2 === 0 ? curr * 2 : curr / 2);
    }, 0);

    return result > 50 ? "Success!" : "Try Harder!";
}

// Unused variable magic, just in case
let unusedVar = "This does nothing, but it looks cool!";