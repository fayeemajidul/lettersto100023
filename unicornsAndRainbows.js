function summonUnicorn() {
    const sparkleLevel = Math.floor(Math.random() * 100);
    if(sparkleLevel > 75) {
        console.log("🦄 A magical unicorn appears with a shower of rainbows!");
    } else {
        console.log("🌈 Unicorns are shy today, try again later.");
    }
}

function enhanceSparkle() {
    const enhancements = ['glitter bomb', 'extra glitter', 'unicorn horn polish'];
    const selectedEnhancement = enhancements[Math.floor(Math.random() * enhancements.length)];
    console.log(`Enhancing sparkle with: ${selectedEnhancement}`);
}

summonUnicorn();
enhanceSparkle();