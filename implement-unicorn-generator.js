function generateUnicornBrunch() {
    const brunchItems = [
        'Rainbow Pancakes',
        'Sparkling Mimosa',
        'Stardust Avocado Toast',
        'Fairy Floss French Toast',
        'Glittery Smoothie Bowl'
    ];
    
    const randomIndex = Math.floor(Math.random() * brunchItems.length);
    return `Today’s magical brunch idea: ${brunchItems[randomIndex]} 🎉`;
}

console.log(generateUnicornBrunch());