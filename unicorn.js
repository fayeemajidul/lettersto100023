function transformCoffeeToCode(coffeeCup) {
    if (coffeeCup === "empty") {
        console.log("Refilling the cup... ☕");
        return "functionality not found";
    } else {
        console.log("Transforming caffeine into code... 🦄");
        let code = "let magic = 'sparkle';\n";
        code += `const powers = ["${getRandomPower()}"];\n`;
        code += "console.log(magic + ' with ' + powers.join(', '));\n";
        return code;
    }
}

function getRandomPower() {
    const powers = ["unicorns", "rainbows", "infinite loops", "dad jokes"];
    return powers[Math.floor(Math.random() * powers.length)];
}