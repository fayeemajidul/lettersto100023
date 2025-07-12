function brewQuantumCoffee(grindSize, waterTemperature) {
    if (grindSize === 'too fine' && waterTemperature > 100) {
        return "Warning: Your coffee might cause time dilation!";
    } else if (grindSize === 'coarse' && waterTemperature < 90) {
        return "Coffee flavor is out of phase. Try again!";
    } else {
        return `Successfully brewed coffee at ${waterTemperature}°C with ${grindSize} grind. Proceed to quantum entanglement.`;
    }
}

console.log(brewQuantumCoffee('medium', 95)); // Just right!