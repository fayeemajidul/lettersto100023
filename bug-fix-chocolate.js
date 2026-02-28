function chocolateMeltdown(level) {
    if (level > 75) {
        console.log("Warning: Excessive heat detected! Chocolates are crying!");
        return "Emergency: Convert to hot chocolate.";
    } else {
        console.log("Chocolates are safe and sound.");
        return "Enjoy your chocolate!";
    }
}

// Note: Level here is measured in degrees Celsius, not enthusiasm.
const temp = 80; // Current temperature
chocolateMeltdown(temp);