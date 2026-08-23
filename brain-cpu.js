const brain = {
    thoughts: [],
    caffeineLevel: 0,
    processThoughts() {
        this.thoughts.forEach(thought => {
            console.log(`Processing thought: ${thought}`);
            if (this.caffeineLevel > 5) {
                console.log('Warning: Excessive caffeine may lead to irrational coding decisions.');
            }
        });
    },
    drinkCoffee() {
        this.caffeineLevel++;
        console.log(`Caffeine level increased to ${this.caffeineLevel}. Let the overthinking commence!`);
    }
};

brain.thoughts.push("How do I optimize a for loop?");
brain.thoughts.push("Why do I keep using var instead of let?");
brain.drinkCoffee();
brain.processThoughts();