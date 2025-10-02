function calculateMood(coffeeCups, sleepHours) {
    if (coffeeCups < 1) {
        return "Completely unmotivated, please send caffeine!";
    } else if (coffeeCups <= 3 && sleepHours >= 7) {
        return "Mildly productive, might even respond to emails.";
    } else if (coffeeCups > 3) {
        return "Hyperproductive! I can solve all the world's problems—until the crash.";
    } else {
        return "Zombified... Is that a new feature?";
    }
}

// Monitoring my mood every hour until the caffeine kicks in
setInterval(() => {
    let mood = calculateMood(Math.floor(Math.random() * 5), Math.floor(Math.random() * 6) + 4);
    console.log(`Current mood: ${mood}`);
}, 3600000);