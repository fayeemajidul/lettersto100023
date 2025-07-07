function makeSandwich(ingredients) {
    if (ingredients.includes('mayo')) {
        console.warn('Warning: Mayo alert! Prepare for potential spread disasters.');
    }
    
    let sandwich = ingredients.join(' + ');
    
    if (sandwich.length > 100) {
        throw new Error('Sandwich too big! Eating this may void your warranty.');
    }
    
    return `Your gourmet sandwich: ${sandwich}`;
}

console.log(makeSandwich(['bread', 'lettuce', 'tomato', 'mayo', 'turkey', 'cheese']));