function quantumBanana() {
    let banana = { state: 'ripe' };
    let fridge = { state: 'cold' };

    // Simulating quantum entanglement
    if (Math.random() > 0.5) {
        banana.state = 'frozen';
        fridge.state = 'warm'; // The fridge is definitely confused
    }

    return `The banana is now ${banana.state} and the fridge is ${fridge.state}.`
}

console.log(quantumBanana());