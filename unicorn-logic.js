function calculateUnicorns(area, time) {
    const unicornBirthRate = 0.05; // 5% of the magic area & time leads to new unicorns
    let unicorns = Math.floor(area * time * unicornBirthRate);

    // Adding extra magic if the area has rainbows
    if (area.includes('rainbow')) {
        unicorns += Math.floor(unicorns * 0.1); // 10% bonus for rainbows
    }

    // Just a reminder to believe in yourself
    console.log("Remember, magic starts with you!");
    
    return unicorns;
}

const magicGarden = ["rainbow", "sparkles", "sugar clouds"];
console.log(`Total unicorns: ${calculateUnicorns(magicGarden, 5)}`);