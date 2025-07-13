function breakUpWithLoop() {
    let love = true;
    let count = 0;

    while (love) {
        console.log("I can't live without you!");
        count++;

        if (count > 10) {
            love = false;
            console.log("It's not you, it's me... I need space.");
        }
    }
}

breakUpWithLoop();