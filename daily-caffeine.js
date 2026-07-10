const coffeeCup = {
    size: 'large',
    type: 'espresso',
    sipsLeft: 5,
    refill() {
        this.sipsLeft = this.size === 'large' ? 10 : 5;
        console.log('Refilled! Now with extra optimism!');
    }
};

function drinkCoffee(cup) {
    if (cup.sipsLeft > 0) {
        cup.sipsLeft--;
        console.log(`Sip! ${cup.sipsLeft} sips left. Starting to feel sentient...`);
    } else {
        console.log('Empty cup detected! Initiating panic mode...');
        cup.refill();
    }
}

// Call to drink coffee every 30 seconds while coding
setInterval(() => drinkCoffee(coffeeCup), 30000);