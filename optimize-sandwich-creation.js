function createSandwich(ingredients) {
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        return "No sandwich can be made with empty thoughts.";
    }
    
    let sandwich = '';
    ingredients.forEach((ingredient, index) => {
        sandwich += `${ingredient}${index < ingredients.length - 1 ? ' + ' : ' = Delicious!'}`;
    });

    return sandwich;
}

console.log(createSandwich(['bread', 'lettuce', 'tomato', 'bacon', 'mayo'])); // Bread + Lettuce + Tomato + Bacon + Mayo = Delicious!