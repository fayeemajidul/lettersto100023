function generateUnicorns(count) {
    const unicorns = [];
    for (let i = 0; i < count; i++) {
        unicorns.push({
            name: `Unicorn-${i + 1}`,
            power: Math.random() > 0.5 ? 'Rainbows' : 'Sparkles',
            age: Math.floor(Math.random() * 10),
            existence: 'Purely Fictional'
        });
    }
    return unicorns;
}

console.log(generateUnicorns(10)); // Just kidding, unicorns are not real... or are they?