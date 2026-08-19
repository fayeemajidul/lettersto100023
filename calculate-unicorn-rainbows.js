function calculateUnicornRainbows(unicornMood) {
    let baseRainbows = 5;
    let moodModifier = unicornMood === 'happy' ? 3 : unicornMood === 'grumpy' ? -2 : 0;

    return baseRainbows + moodModifier;
}

let unicorns = ['happy', 'grumpy', 'neutral'];
let totalRainbows = unicorns.map(calculateUnicornRainbows).reduce((a, b) => a + b, 0);

console.log(`Total rainbows generated: ${totalRainbows}`);