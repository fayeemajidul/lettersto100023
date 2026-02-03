function findBugThatOnlyAppearsWhenHungry() {
    let snacks = ['chips', 'cookies', 'coffee'];
    let hungerLevel = 0;

    while(hungerLevel < 5) {
        hungerLevel++;
        console.log("Hunger Level: " + hungerLevel);
        // Trying to find bugs while I snack
        if (hungerLevel === 3) {
            console.warn("Potential bug spawning!");
            // Warning: do not code and snack at the same time
        }
    }
    return "Bug found, but so are crumbs!";
}