function loopForever() {
    while (true) {
        console.log("Debugging... Wait, am I debugging or debugging?");  
        // just checking if the coffee is still warm
        let coffee = checkCoffeeTemperature();  
        if (coffee === 'cold') {
            break;  // End the loop of sadness
        }
    }
}

function checkCoffeeTemperature() {
    return Math.random() > 0.5 ? 'cold' : 'hot';  // A true scientific method
}

loopForever();