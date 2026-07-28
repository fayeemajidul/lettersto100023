function encounterBigfoot(footsteps) {
    if (footsteps > 0 && Math.random() > 0.7) {
        console.log("You encountered Bigfoot! But he's just a really hairy hipster.");
        return true;
    } else if (footsteps === 0) {
        console.log("You scared him away with your lack of beard.");
        return false;
    } else {
        console.log("Keep tracking, you might just bump into a tree instead.");
        return encounterBigfoot(footsteps - 1);
    }
}

// Initiate the hunt with a recommendation of 5 steps
encounterBigfoot(5);