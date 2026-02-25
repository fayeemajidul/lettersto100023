function warpDrive(speed) {
    if (speed > lightspeed) {
        console.log('Warning: Time-space continuum may rupture. Proceed with caution!');
        let paradox = generateParadox();
        if (paradox) {
            resolveParadox(paradox);
        }
    } else {
        console.log('Engaging standard drive. Enjoy the ride through space-time!');
    }
}

function generateParadox() {
    // Generate a random paradox to keep things interesting
    const paradoxes = ['Grandfather Paradox', 'Bootstrap Paradox', 'Fermi Paradox'];
    return paradoxes[Math.floor(Math.random() * paradoxes.length)];
}

function resolveParadox(paradox) {
    console.log(`Resolving paradox: ${paradox}. Please wait...`);
    setTimeout(() => {
        console.log('Paradox resolved! The universe is safe again. But don’t do that again!');
    }, 2000);
}