function preventUnicornSwimming(unicorn, octopus) {
    if (unicorn.hasWings && octopus.hasTentacles) {
        console.log("Warning: Unicorns and octopuses don't mix! Deploying the rainbow shield.");
        unicorn.deployRainbowShield();
    } else {
        console.log("All systems normal. Unicorns can frolic freely!");
    }
}

const unicorn = { hasWings: true, deployRainbowShield: () => console.log("✨ Rainbow shield activated! 🌈") };
const octopus = { hasTentacles: true };

preventUnicornSwimming(unicorn, octopus);