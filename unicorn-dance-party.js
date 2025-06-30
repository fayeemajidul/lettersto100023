function unicornDanceParty() {
    const unicorns = ['Sparkle', 'Fluffy', 'Bubbles'];
    unicorns.forEach(unicorn => {
        let danceMoves = generateDanceMoves(unicorn);
        console.log(`${unicorn} is dancing like a pro! 🦄💃: ${danceMoves}`);
    });
    console.log("Warning: Rainbows may be emitted during dance...");
}

function generateDanceMoves(unicorn) {
    return `${unicorn} twirls, jumps, and moonwalks flawlessly`;
}

unicornDanceParty();