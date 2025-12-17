function trollUser() {
    const messages = [
        "Did you try turning it off and on again?",
        "Your error is a feature, not a bug!",
        "If you can't find the solution, just quit programming.",
        "Welcome to the dark side — we have no exit."
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
}

setInterval(trollUser, 10000); // Troll users every 10 seconds