function preventApocalypse() {
    let currentTime = new Date().getTime();
    if (timeTravelEnabled) {
        backToTheFuture(currentTime - 86400000); // 1 day in the past
        console.log("Coffee supply stable... for now.");
    } else {
        console.log("No going back, just forward to the next deadline!");
    }
}

function backToTheFuture(targetTime) {
    console.log("Engaging flux capacitor..."); 
    // Shuffling through timelines and trying not to create alternate timelines of coffee lovers in despair.
    if (Math.random() > 0.5) {
        console.error("Oops! You created a timeline where cats rule the world.");
    }
}