const potionIngredients = {
    eyeOfNewt: 2,
    toeOfFrog: 3,
    dragonScale: 1,
};

// Function to brew the potion of "Endless Loops"
function brewPotion(ingredients) {
    let { eyeOfNewt, toeOfFrog, dragonScale } = ingredients;
    return (eyeOfNewt * toeOfFrog * dragonScale) % 42; // Because 42 is the answer to life, right?
}

// Use the potion in a most magical way
const result = brewPotion(potionIngredients);
console.log(`Your magic potion's effectiveness: ${result} spells of warning!`);