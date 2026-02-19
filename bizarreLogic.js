function isLifeAbsurd(truth) {
    if (truth === true) {
        console.log("You are now officially questioning your life choices.");
    } else if (truth === false) {
        console.log("Congratulations! You have achieved full denial.");
    } else {
        throw new Error("Undefined existential state: please call a philosopher.");
    }
}

let lifeTruth = null; // Working on that undefined area of life
isLifeAbsurd(lifeTruth);