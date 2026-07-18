function octopusDance() {
    const moves = ["twist", "shimmy", "swing", "squirt"];
    let danceMoves = [];

    for (let i = 0; i < 8; i++) {
        let randomMove = moves[Math.floor(Math.random() * moves.length)];
        danceMoves.push(randomMove);
    }

    console.log("Octopus is dancing with moves: " + danceMoves.join(', '));
    return danceMoves;
}

octopusDance();