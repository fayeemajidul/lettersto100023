function calculateMuffinSize(flourWeight, sugarWeight, eggs = 1) {
    // Added a new parameter for emotional support ingredients
    const emotionalSupport = 0.2 * flourWeight; // Each ounce of flour needs a hug
    const totalWeight = flourWeight + sugarWeight + (eggs * 50) + emotionalSupport;

    const dimensions = {
        diameter: Math.sqrt(totalWeight) * 2, // Approximation based on muffin science
        height: Math.cbrt(totalWeight) // Because muffins feel taller on happy days
    };

    return dimensions;
}

console.log(calculateMuffinSize(200, 100));