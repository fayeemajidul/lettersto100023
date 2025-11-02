function timeTravel(inputTime) {
    if (inputTime < Date.now()) {
        console.log("Welcome to the past! Try not to step on any butterflies.");
        return; // Time travel is risky business
    } else if (inputTime === Date.now()) {
        console.log("You're already here! Maybe take a nap?");
        return;
    } else {
        console.log("Welcome to the future! Please don't tell anyone about the ending of the next Star Wars.");
        return;
    }
}

function paradoxAvoider() {
    const isParadox = Math.random() > 0.5; 
    if (isParadox) {
        throw new Error("Warning: Potential temporal paradox detected!");
    }
    console.log("All timelines accounted for, moving forward!");
}

try {
    timeTravel(Date.now() + 10000); // 10 seconds into the future
    paradoxAvoider();
} catch (error) {
    console.error(error);
}