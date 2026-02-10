function transformToHamburger(ingredients) {
    if (ingredients.includes('bread') && ingredients.includes('patty')) {
        console.log('✨ Behold! Your meal is now a hamburger! 🎉');
        return 'hamburger';
    } else {
        console.log('Unfortunately, this is just a sad salad. 😢');
        return 'sad_salad';
    }
}

const meal = ['lettuce', 'tomato', 'bread', 'patty'];  
transformToHamburger(meal);