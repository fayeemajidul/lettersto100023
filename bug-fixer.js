function fixBug() {
    try {
        let result = askBugNicely();
        if (!result) throw new Error("Bug is not sociable.");
        console.log("Bug fixed successfully!");
    } catch (error) {
        console.error("Error: ", error.message);
        console.log("Next time, try a bribe.");
    }
}

function askBugNicely() {
    // Simulates asking the bug nicely
    return Math.random() > 0.5; // Apparently, bugs are moody
}

fixBug();