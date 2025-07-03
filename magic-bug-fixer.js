function fixMagicBug() {
    const fairyDust = '✨';
    let bugCount = 5;

    for (let i = 0; i < bugCount; i++) {
        console.log('Applying fairy dust...');
        setTimeout(() => {
            console.log('Bug ' + (i + 1) + ' transformed into a feature! 🦄');
        }, i * 1000);
    }

    return `${bugCount} bugs have been successfully charmed into features!`;
}

console.log(fixMagicBug());