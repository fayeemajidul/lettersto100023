const isFullMoon = () => {
    const date = new Date();
    const lunarPhase = (date.getDate() + 1) % 29; // Simplified lunar phase calculation
    return lunarPhase === 0;
};

const mysteriousFeature = () => {
    if (isFullMoon()) {
        console.log("Bug activated: Unexpected invisibility mode engaged!");
        // Code to handle invisibility (which only sometimes works)
        setTimeout(() => {
            console.log("Oops! You've vanished into the void. Check your backups!");
        }, 5000);
    } else {
        console.log("All systems nominal. The stars are aligned.");
    }
};

mysteriousFeature();