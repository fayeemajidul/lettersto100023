// This function attempts to predict the outcome of a cat chasing a laser pointer
function predictCatBehavior(timeSpentChasing, numberOfPounces) {
    const laserVisibility = Math.random() > 0.5; // 50% chance the laser is working
    let pounceFactor = laserVisibility ? numberOfPounces * 2 : numberOfPounces / 2;

    if (timeSpentChasing > 60) {
        console.log("Cat is now plotting world domination.");
        return "Dominance achieved";
    } else if (pounceFactor > 10) {
        console.log("Cat only pounces if food is nearby.");
        return "Pounce ceased";
    }
    
    return "Endless chasing, please send help!";
}

// Just kidding, the real logic is in my cat's head.