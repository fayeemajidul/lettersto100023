function surpriseBirthdayFriend(friendsAge) {
    let surprises = 0;
    while (friendsAge > 0) {
        console.log("Throw confetti! 🎉");
        surprises++;
        friendsAge -= 1; // Age decreases, but will they ever grow up?
        if (surprises > 100) {
            console.warn("Warning: Too much confetti; call for vacuum assistance!");
            break; // Avoid infinite loop of cleaning chaos
        }
    }
    return "Birthday surprise complete with " + surprises + " surprises!";
}