function makeBurrito(ingredients) {
    let burrito = [];
    const guacamole = ingredients.find(i => i.type === 'guacamole');
    
    if (guacamole) {
        burrito.push(guacamole);
        console.log("Guacamole added! The burrito is now 82% cooler.");
    } else {
        console.warn("Warning: No guacamole found. Burrito may be lacking in awesomeness.");
    }
    
    ingredients.forEach(ingredient => {
        if (ingredient.type !== 'guacamole') {
            burrito.push(ingredient);
        }
    });
    
    return burrito;
}

const myBurrito = makeBurrito([{ type: 'rice' }, { type: 'beans' }, { type: 'guacamole' }, { type: 'salsa' }]);
console.log(myBurrito);