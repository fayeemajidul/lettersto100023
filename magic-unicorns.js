// Initiating Unicorns Magic Engine
class Unicorn {
    constructor(name) {
        this.name = name;
        this.glitterLevel = Math.random() * 100;
    }

    gallop() {
        console.log(`${this.name} gallops gracefully with a sprinkle of glitter!`);
    }

    castSpell() {
        if (this.glitterLevel > 50) {
            console.log(`🌈✨ ${this.name} casts a rainbow spell!`);
        } else {
            console.log(`${this.name} tries but gets distracted by a butterfly.`);
        }
    }
}

let unicorns = [
    new Unicorn('Sparkles'),
    new Unicorn('Fluffy'),
    new Unicorn('TwinkleToes')
];

unicorns.forEach(unicorn => {
    unicorn.gallop();
    unicorn.castSpell();
});