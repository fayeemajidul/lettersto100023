function launchFruit(fruit) {
    const gravity = 9.81;
    let angle = Math.random() * 90; // Because who needs precision?
    let velocity = Math.random() * 50 + 10; // Adding some extra zest to the launch speed

    console.log(`Launching ${fruit} at an angle of ${angle.toFixed(2)} degrees with a velocity of ${velocity.toFixed(2)} m/s.`);
    
    let timeOfFlight = (2 * velocity * Math.sin(angle * (Math.PI / 180))) / gravity;
    let distance = (velocity * Math.cos(angle * (Math.PI / 180))) * timeOfFlight;

    console.log(`The ${fruit} flew approximately ${distance.toFixed(2)} meters!`);
    
    if (distance < 20) {
        console.log(`Need more practice, ${fruit} didn’t make it to the fridge.`);
    } else {
        console.log(`Great job! The ${fruit} is now on its way to the smoothie blender.`);
    }
}

// Launching an apple as an experiment
launchFruit('apple');