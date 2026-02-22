function calculateUnicornHappiness(candies, rainbows) {
    const happinessFactor = candies * 42 + Math.pow(rainbows, 2) / 7;
    return happinessFactor > 100 ? "Overjoyed!" : "Need more sprinkles.";
}

let unicornHappiness = calculateUnicornHappiness(10, 8);
console.log("Unicorn Status: " + unicornHappiness);