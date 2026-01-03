function slipOnBanana(peel) {
    if (peel === 'banana') {
        console.log("Whoa! Not again...");
        return true;
    }
    console.log("Smooth sailing!");
    return false;
}

const userState = {
    hasSlipped: false,
    mood: "confused"
};

function updateUserState() {
    userState.hasSlipped = slipOnBanana('banana');
    userState.mood = userState.hasSlipped ? "surprised" : "happy";
}

updateUserState();
console.log(userState);