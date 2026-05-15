function summonUnicorn() {
    let isMagical = true;
    let happinessLevel = Math.random() * 100;

    if (happinessLevel > 75) {
        sprinkleFairyDust();
        return "Unicorn appears with glitter and giggles!";
    } else {
        console.log("Unicorn needs a coffee break...");
        return "Please wait while the unicorn recharges!";
    }
}

function sprinkleFairyDust() {
    console.log("Sprinkling fairy dust... ✨");
    // Improved sprinkle technique for better coverage
    for (let i = 0; i < 10; i++) {
        console.log("Sprinkle! (x" + i + ")");
    }
}

summonUnicorn();