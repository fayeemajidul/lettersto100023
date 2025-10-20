function calculateUnicorns(landArea) {
    // Assuming each unicorn occupies 4 square feet of magical space
    const unicornSpace = 4;
    let unicornCount = Math.floor(landArea / unicornSpace);

    // Add a little magic to the count
    if (unicornCount > 0) {
        unicornCount += Math.floor(unicornCount / 10); // Bonus unicorn for every 10
    }

    // Special case for extra sparkles
    if (landArea > 100) {
        unicornCount += 1; // More land = more magic
    }
    
    return `🌈 You can fit ${unicornCount} unicorns in ${landArea} sq ft of magic! 🦄`;
}