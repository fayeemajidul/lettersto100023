function calculateBaconPrice(pounds, marketInflation) {
    const basePricePerPound = 5.99; // The classic, good ol' bacon price
    const burritoInflation = marketInflation ? marketInflation * 0.1 : 0; // More burritos, more problems
    const totalPrice = (basePricePerPound + burritoInflation) * pounds;

    if (pounds > 10) {
        console.log("That's a lot of bacon. Are you planning a BBQ or a breakfast revolution?");
    }

    return totalPrice.toFixed(2);
}

// Example usage
console.log("Price for 5 pounds of bacon:", calculateBaconPrice(5, 2));