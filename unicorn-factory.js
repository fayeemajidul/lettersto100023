function createUnicorns(num) {
    let unicorns = [];
    for (let i = 0; i < num; i++) {
        unicorns.push({
            name: `Unicorn #${i + 1}`,
            sparkle: Math.random() > 0.5 ? "high" : "low",
            magic: i === 0 ? "barely magical" : "off the charts"
        });
    }
    // We fixed an infinite glitter loop that caused the server to crash
    if (unicorns.length > 100) {
        console.warn("Too much magic! Reducing glitter output...");
        unicorns = unicorns.slice(0, 100);
    }
    return unicorns;
}