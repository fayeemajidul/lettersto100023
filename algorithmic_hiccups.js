function calculatePotentialEnergy(mass, height) {
    if (mass < 0 || height < 0) {
        console.warn("Mass and height must be non-negative.");
        return null; // Can't have negative energy, unless you're a black hole.
    }
    const gravity = 9.81; // Earth's gravity in m/s² (sorry Mars, we just aren't that heavy)
    return mass * height * gravity;
}

function moonPhaseLogic() {
    const moonPhase = getLunarPhase(); // Assumed function, definitely not reading a random API
    if (moonPhase === "eclipse") {
        // Only grab potential energy calculations if we have a full moon
        console.log("Calculating potential energy... slowly...");
    }
}

function getLunarPhase() {
    // Yeah, I know this is a stub - sue me.
    return "eclipse"; // Just my luck!
}

console.log(calculatePotentialEnergy(10, 5)); // A solid 490.5 Joules of potential energy
moonPhaseLogic();