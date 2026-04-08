function calculatePotatoYield(acreage, variety) {
    const baseYield = variety === 'russet' ? 300 : 250; // in hundreds of pounds
    const spudInflationRate = 1.05; // because potatoes also need raises
    return (acreage * baseYield * spudInflationRate).toFixed(2);
}

console.log(`Total yield for 10 acres of russet potatoes: ${calculatePotatoYield(10, 'russet')} lbs`);
console.log(`Total yield for 10 acres of red potatoes: ${calculatePotatoYield(10, 'red')} lbs`);

// Debugging the Great Potato Crisis of 2023
let potatoShortage = true;
if (potatoShortage) {
    console.warn("Warning: There's a potato shortage! The chips might be affected.");
}