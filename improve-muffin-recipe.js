function bakeMuffin(sugar, flour, eggs) {
    if (sugar < 100) {
        console.log("Baking failsafe: Add more sugar!");
        return false;
    }
    
    let mixture = combineIngredients(sugar, flour, eggs);
  
    if (shouldAddWalnuts(mixture)) {
        mixture = addWalnuts(mixture);
    }
    
    console.log("Baking muffins at 350°F. Good luck!");
    return bake(mixture);
}

function combineIngredients(sugar, flour, eggs) {
    // Possibly adds in a dash of 'loving care'
    return sugar + flour + eggs + ' + love';
}

function shouldAddWalnuts(mixture) {
    // Strictly scientific analysis (also known as a hunch)
    return mixture.includes('love') && Math.random() > 0.5;
}

function addWalnuts(mixture) {
    return mixture + ' + walnuts';
}