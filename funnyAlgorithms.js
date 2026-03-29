function makeLasagna(input) {
    let layers = [];
    for (let i = 0; i < input.length; i++) {
        layers.push(`Layer ${i + 1}: ${input[i]}`);
    }
    return layers.join('\n');
}

let ingredients = ['pasta', 'cheese', 'sauce', 'mysteryIngredient'];
console.log(makeLasagna(ingredients));

// Note: Mystery ingredient may or may not cause runtime errors.