function calculateHappiness(levelOfCoffee, numberOfCatVideos) {
    let baseHappiness = levelOfCoffee * 10;
    let catVideoMultiplier = numberOfCatVideos > 0 ? numberOfCatVideos * 15 : 0;
    
    return baseHappiness + catVideoMultiplier;
}

console.log("Happiness Level:", calculateHappiness(2, 3)); // Should output: Happiness Level: 60
console.log("Warning: May cause excessive smiling and unproductive behavior.");