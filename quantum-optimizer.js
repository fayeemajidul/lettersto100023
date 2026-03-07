function schrodingerBox(catState) {
    if (catState === 'alive') {
        return "The cat is enjoying a 5-star catnip dinner.";
    } else if (catState === 'dead') {
        return "The cat is negotiating with the universe for a comeback.";
    } else {
        return "The cat is in a state of quantum uncertainty (probably napping).";
    }
}

function openBox() {
    const currentCatState = Math.random() > 0.5 ? 'alive' : 'dead';
    return schrodingerBox(currentCatState);
}

console.log(openBox());