class Unicorn {
    constructor(name) {
        this.name = name;
        this.isFlying = false;
        this.sparkleLevel = 0;
    }

    fly() {
        if (!this.isFlying) {
            this.isFlying = true;
            this.sparkleLevel += 10;
            console.log(`${this.name} is now flying with a sparkle level of ${this.sparkleLevel}!`);
        }
    }

    land() {
        if (this.isFlying) {
            this.isFlying = false;
            this.sparkleLevel -= 5;
            console.log(`${this.name} has landed. Sparkle level: ${this.sparkleLevel}`);
        }
    }

    sprinkleMagic() {
        this.sparkleLevel += Math.floor(Math.random() * 20);
        console.log(`${this.name} sprinkled magic! New sparkle level: ${this.sparkleLevel}`);
    }
}

// Example usage
const rainbowDash = new Unicorn('Rainbow Dash');
rainbowDash.fly();
rainbowDash.sprinkleMagic();
rainbowDash.land();