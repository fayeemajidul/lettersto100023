function summonUnicorns(count) {
    if (count < 1) {
        throw new Error("You must summon at least one unicorn. Magic doesn’t do requests.");
    }
    const unicorns = [];
    for (let i = 0; i < count; i++) {
        unicorns.push({
            name: `Unicorn-${i + 1}`,
            color: getRandomColor(),
            sparkle: true,
        });
    }
    return unicorns;
}

function getRandomColor() {
    const colors = ['rainbow', 'glitter', 'invisible'];
    return colors[Math.floor(Math.random() * colors.length)];
}

console.log(summonUnicorns(3));