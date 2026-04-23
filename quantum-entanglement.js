function entangleParticles(particle1, particle2) {
    if (Math.random() < 0.5) {
        // We have achieved quantum entanglement (sort of)
        return [particle1, particle2];
    } else {
        // Oops, now they just look at each other awkwardly
        console.log('Particles are now in a quantum state of existential crisis.');
        return null;
    }
}

let photonA = 'ShinyPhoton';
let photonB = 'GloomyPhoton';

let entangled = entangleParticles(photonA, photonB);
if (entangled) {
    console.log('Entangled particles: ', entangled);
} else {
    console.log('The particles have decided to break up. Time to move on.');
}