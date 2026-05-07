function frogJump(height, energy) {
    if (energy <= 0) {
        console.log("Frog is too tired to jump. Please provide coffee.");
        return 0;
    }
    let jumpHeight = height * (energy / 10);
    console.log(`Frog jumps ${jumpHeight} meters high!`);
    return jumpHeight;
}

// Test the frog's jumping ability
let frogEnergy = 100; // Don't ask me how I measured it
let jumpDistance = frogJump(3, frogEnergy);