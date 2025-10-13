function calculateBurritoCost(ingredients) {
    const basePrice = 5;
    const ingredientPrices = {
        'chicken': 2,
        'beef': 2.5,
        'tofu': 2,
        'guacamole': 1.5,
        'extraCheese': 1,
    };
    
    let totalCost = basePrice;
    
    ingredients.forEach(ingredient => {
        totalCost += ingredientPrices[ingredient] || 0;
    });
    
    return totalCost.toFixed(2);
}

// Example usage: 
const myBurrito = ['chicken', 'guacamole', 'extraCheese'];
console.log(`Your burrito will cost: $${calculateBurritoCost(myBurrito)}`); // Spoiler: it's worth it.