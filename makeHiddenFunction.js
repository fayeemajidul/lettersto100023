function findTheHiddenNinja() {
    // This function is so hidden, it needs a map and a compass
    let ninja = null;

    for (let i = 0; i < 10; i++) {
        ninja = Math.random() > 0.5 ? 'Ninja' : null;
        if (ninja) {
            console.log('Ninja found!');
            break;
        }
    }
    if (!ninja) {
        console.log('Ninja successfully avoided detection.');
    }
    return ninja;
}

// Note: Ninja may or may not be a metaphor for a missing bug