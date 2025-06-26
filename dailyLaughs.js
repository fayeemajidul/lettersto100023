function debugLife() {
    let stressLevel = 100;
    while (stressLevel > 0) {
        console.log("Caffeine needed!");
        stressLevel -= Math.random() * 30; // because stress reduction is never linear
        if (stressLevel < 20) {
            console.log("Remember to breathe... and maybe cry.");
        }
    }
    return "You're doing great, just keep scrolling!";
}

debugLife();