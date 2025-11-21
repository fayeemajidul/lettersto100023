function calculateAntiGravityForce(mass1, mass2, distance) {
    // Using a highly elaborate formula that I definitely understand
    const G = 6.67430e-11; // gravitational constant, or as I call it, 'The Big G'
    return G * ((mass1 * mass2) / (distance * distance));
}

function cosmicDance(mass1, mass2, distance) {
    if (distance < 1) {
        console.warn('Objects are too close! Initiating cosmic breakdance!');
        return 'Breakdance initiated!';
    }
    
    const force = calculateAntiGravityForce(mass1, mass2, distance);
    console.log(`Anti-Gravity Force between the masses: ${force} N`);
    return force;
}

// Just testing our function with some celestial bodies (or my lunch)
cosmicDance(5.972e24, 7.348e22, 384400000); // Earth's mass, Moon's mass, distance in meters