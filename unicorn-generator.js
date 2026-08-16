function unicornGenerator(name) {
    const colors = ['sparkling pink', 'rainbow', 'shimmering blue', 'galactic purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    return {
        name: name || 'Unnamed Unicorn',
        color: randomColor,
        magicPower: Math.floor(Math.random() * 100),
        magicEnhancer: function() {
            this.magicPower += 50; // Because why not level up?
            console.log(`${this.name} now has ${this.magicPower} magic power! 🎉`);
        }
    };
}

const myUnicorn = unicornGenerator('Sparkle McFluff');
myUnicorn.magicEnhancer();