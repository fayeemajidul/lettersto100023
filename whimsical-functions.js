function unicornDance(duration) {
    if (duration > 5) {
        console.log("Warning: Too much magic may cause sparkles!");
    }
    for (let i = 0; i < duration; i++) {
        console.log("Twirl!!! ✨");
        if (i % 3 === 0) {
            console.log("Rainbow explosion!! 🌈💥");
        }
    }
    return "Finished dancing, time to recharge on cupcakes.";
}