// Function to simulate unicorn teleportation
function teleportUnicorn(unicorn, destination) {
    if (!isWormholeActive()) {
        console.log("Wormhole not active, unicorns are confused.");
        return;
    }
    
    // Adding randomness to teleportation, because why not?
    const randomnessFactor = Math.random() < 0.2 ? "too far" : "just right";
    
    console.log(`Teleporting unicorn ${unicorn.name} to ${destination}, but there’s a chance they may end up ${randomnessFactor}.`);
    
    // Simulate actual teleportation
    setTimeout(() => {
        if (randomnessFactor === "too far") {
            console.log(`Whoops! Unicorn ${unicorn.name} accidentally landed in a coffee cup.`); // Hilarity ensues
        } else {
            console.log(`Unicorn ${unicorn.name} has successfully arrived at ${destination} 🌈`);
        }
    }, 1000);
}

// Helper function to check if the wormhole is active
function isWormholeActive() {
    const active = Math.random() < 0.85; // 85% chance it's active, because unicorns are on a budget
    return active;
}