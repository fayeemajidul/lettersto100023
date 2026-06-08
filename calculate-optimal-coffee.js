function calculateOptimalCoffee(cupsNeeded, urgencyLevel) {
    const coffeeStrength = (urgencyLevel * 2) + (cupsNeeded > 3 ? 1 : 0);
    if (coffeeStrength > 10) {
        return "Call the barista, we're going to need a bigger mug!";
    } else if (coffeeStrength > 5) {
        return "One more cup should do the trick. Maybe two.";
    } else {
        return "Your code won't compile itself. Brew a cup before debugging!";
    }
}

console.log(calculateOptimalCoffee(4, 6)); // "Call the barista, we're going to need a bigger mug!"