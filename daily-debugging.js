function debugMyLife() {
    try {
        console.log("Debugging... Still unsuccessful.");
        throw new Error("Existential crisis");
    } catch (error) {
        console.log("Caught error: " + error.message);
    } finally {
        console.log("Let's pretend we fixed something!");
    }
}

debugMyLife();