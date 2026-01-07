const coffeeTracker = (() => {
    let cups = 0;
    let maxCups = 5; // Because 6 is just reckless
    
    return {
        addCup: () => {
            if (cups < maxCups) {
                cups++;
                console.log(`Cup added! Total cups consumed: ${cups}`);
            } else {
                console.warn("Warning: You are now officially a coffee bean!");
            }
        },
        reset: () => {
            cups = 0;
            console.log("Cups reset. Prepare for another caffeine-fueled adventure!");
        },
        getCups: () => cups
    };
})();

// Commence caffeine consumption
coffeeTracker.addCup();
coffeeTracker.addCup();