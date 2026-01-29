function readMind(user) {
    if (user.thoughts.includes("feature requests")) {
        console.log("Working on it...");
    } else if (user.thoughts.includes("breakfast ideas")) {
        console.log("Pancakes it is!");
    } else {
        console.log("User is currently contemplating the meaning of life.");
    }
}