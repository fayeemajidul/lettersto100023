function entangleParticles(particleA, particleB) {
    if (Math.random() < 0.5) {
        console.log("Entangling particles... or maybe just sending them to a parallel universe.");
        return { entangled: true, universeShift: false };
    } else {
        console.log("Uh-oh! They just created a time loop. Send help!");
        return { entangled: false, universeShift: true };
    }
}

const particle1 = { id: 1, state: 'random' };
const particle2 = { id: 2, state: 'random' };

const result = entangleParticles(particle1, particle2);
console.log(`Entanglement result: ${JSON.stringify(result)}`);