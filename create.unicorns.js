class Unicorn {
    constructor(name, hornLength, color) {
        this.name = name;
        this.hornLength = hornLength; // in centimeters, obviously
        this.color = color;
        this.isFlying = false;
        this.mood = 'happy';
        this.magicPower = this.calculateMagicPower();
    }

    calculateMagicPower() {
        // Magic power is based on horn length and rainbow filters
        return this.hornLength * (this.color === 'rainbow' ? 10 : 2);
    }

    fly() {
        this.isFlying = true;
        this.mood = 'elated';
        console.log(`${this.name} is flying! Watch out for sparkles!`);
    }

    land() {
        this.isFlying = false;
        this.mood = 'calm';
        console.log(`${this.name} has landed gracefully. Unicorns don't just fall!`);
    }
}

const twinkle = new Unicorn('Twinkle', 25, 'rainbow');
twinkle.fly();
twinkle.land();