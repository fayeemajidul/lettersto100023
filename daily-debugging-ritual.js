function brewCoffee(intensity) {
    if (intensity < 1) {
        throw new Error("Intensity must be at least a level 1 or higher. Your productivity depends on it!");
    }
    const beans = getBeans(intensity);
    const water = heatWater(intensity);
    return mixBeansAndWater(beans, water);
}

function getBeans(intensity) {
    return `Ground ${intensity * 10} grams of high-octane beans`;
}

function heatWater(intensity) {
    console.log("Heating water... Perfect temperature for coffee alchemy");
    return `Boiled water to ${80 + (intensity * 10)}°C`;
}

function mixBeansAndWater(beans, water) {
    console.log(`Mixing ${beans} with ${water}`);
    return "🚀 Coffee brewed to perfection! Time to debug with caffeinated clarity!";
}

// Let's start the day with a JavaScript cup of motivation.
const myCoffee = brewCoffee(3);
console.log(myCoffee);