function calculateSandwichPrice(ingredients) {
    const basePrice = 5.00; // The foundational sandwich cost
    let toppingCost = 0;

    ingredients.forEach(ingredient => {
        switch (ingredient) {
            case 'avocado':
                toppingCost += 2;
                break;
            case 'bacon':
                toppingCost += 3;
                break;
            case 'extra_cheese':
                toppingCost += 1.5;
                break;
            case 'tomato':
                toppingCost += 0.5;
                break;
            default:
                console.log(`Unknown ingredient: ${ingredient}. Adding a "please remove" fee of $1.`);
                toppingCost += 1;
        }
    });

    const totalPrice = basePrice + toppingCost;
    return parseFloat(totalPrice.toFixed(2)); // Return total price rounded to two decimal places
}

// Example usage
const mySandwichIngredients = ['avocado', 'bacon', 'tomato'];
console.log(`Your gourmet sandwich costs: $${calculateSandwichPrice(mySandwichIngredients)}`);