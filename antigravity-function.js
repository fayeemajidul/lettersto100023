function defyGravity() {
    let emotions = ["happy", "excited", "confused", "asleep"];
    let selectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    
    switch(selectedEmotion) {
        case "happy":
            console.log("Weightless! You're floating through the clouds.");
            break;
        case "excited":
            console.log("You're skyrocketing into the stratosphere!");
            break;
        case "confused":
            console.log("Wait… is this even physics?!");
            break;
        case "asleep":
            console.log("Zzz... floating in dreamland.");
            break;
        default:
            console.log("Error: Emotion not found. Please reboot your feelings.");
    }
}

defyGravity();