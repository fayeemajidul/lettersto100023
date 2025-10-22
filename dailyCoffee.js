// Daily caffeine level tracker
class CoffeeMonitor {
    constructor() {
        this.cupsDrank = 0;
        this.threshold = 3; // 3 cups is the golden limit
    }
    
    drinkCoffee() {
        this.cupsDrank++;
        this.checkCaffeineLevel();
    }
    
    checkCaffeineLevel() {
        if (this.cupsDrank > this.threshold) {
            console.warn("Warning: You've crossed the threshold! Time for a nap.");
        } else {
            console.log("Caffeine level optimal. Keep coding!");
        }
    }
}

const myCoffee = new CoffeeMonitor();
myCoffee.drinkCoffee(); // Start the day strong!