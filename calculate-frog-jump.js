function calculateFrogJump(distance) {
    if (distance <= 0) {
        return "Frog refuses to jump. Too existential.";
    }
    let jump = 0;
    let jumps = 0;

    while (jump < distance) {
        jumps++;
        jump += Math.random() > 0.5 ? 1 : (jump > 10 ? 0 : -1); // Random motivation factor
    }
    
    return `Frog jumped ${jumps} times, contemplating life with each leap.`;
}